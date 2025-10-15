module Error
  module Handler
    extend ActiveSupport::Concern

    included do
      rescue_from StandardError, with: :handle_standard_error
      rescue_from Error::ErrorCode, with: :handle_coded_error
      rescue_from Error::MultipleError, with: :handle_multiple_error
    end

    def handle_standard_error(err)
      status = err.respond_to?(:status) ? err.status : :internal_server_error
      error = { msg: err.message }
      error[:backtrace] = err.backtrace if Rails.env.development?
      json = { errors: [ error ] }

      render json: json, status: status
    end

    def handle_coded_error(err)
      status = err.respond_to?(:status) ? err.status : :internal_server_error
      cookies[:auth_token] = nil if err.code == 'UNAUTHORIZED'

      json = { errors: [ { code: err.code } ] }
      json[:trace] = err.backtrace if Rails.env.development? && err.trace

      render json: json, status: status
    end

    def handle_graphql_error(err)
      status = err.respond_to?(:status) ? err.status : :internal_server_error
      json = { errors: err.errors }

      render json: json, status: status
    end

    def handle_multiple_error(err)
      status = err.respond_to?(:status) ? err.status : :internal_server_error
      json = { errors: err.errors }

      render json: json, status: status
    end

    def route_not_found
      render json: { errors: [ { code: 'ROUTE_NOT_FOUND' } ] }, status: :not_found
    end
  end
end
