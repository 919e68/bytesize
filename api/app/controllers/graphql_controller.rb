# frozen_string_literal: true

class GraphqlController < ApplicationController
  include Auth::Concerns::CurrentSession
  include Auth::Concerns::Authorization

  def execute
    operation_name = params[:operationName]
    query = params[:query]
    variables = prepare_variables(params[:variables])
    files = Array(params[:files].presence || params[:file].presence).compact

    context = {
      request: request,
      current_session: current_session,
      files: files
    }

    result = AppSchema.execute(
      query,
      variables: variables,
      operation_name: operation_name,
      context: context,
    )

    # set cookies for auth
    if context[:auth_token].present?
      if context[:auth_token] != :logout
        cookies[:auth_token] = {
          value: context[:auth_token],
          httponly: true,
          secure: true,
          same_site: :lax, # :strict | :lax | :none
          expires: 2.hours.from_now
        }
      else
        cookies[:auth_token] = nil
      end
    end

    render json: result
  rescue Error::MultipleError => err
    handle_multiple_error(err)
  rescue Error::GraphqlError => err
    handle_graphql_error(err)
  rescue Error::ErrorCode => err
    handle_coded_error(err)
  rescue StandardError => err
    handle_standard_error(err)
  end

  private

  # Handle variables in form data, JSON body, or a blank value
  def prepare_variables(variables_param)
    case variables_param
    when String
      if variables_param.present?
        JSON.parse(variables_param) || {}
      else
        {}
      end
    when Hash
      variables_param
    when ActionController::Parameters
      variables_param.to_unsafe_hash # GraphQL-Ruby will validate name and type of incoming variables.
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{variables_param}"
    end
  end
end
