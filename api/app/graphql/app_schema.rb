# frozen_string_literal: true

class AppSchema < GraphQL::Schema
  use GraphQL::Dataloader
  use GraphQL::Subscriptions::ActionCableSubscriptions

  context_class GraphqlContext

  query Types::Root::QueryType
  mutation Types::Root::MutationType
  # subscription Types::Root::SubscriptionType

  def self.type_error(err, context)
    # if err.is_a?(GraphQL::InvalidNullError)
    #   # report to your bug tracker here
    #   return nil
    # end
    super
  end

  def self.resolve_type(abstract_type, obj, ctx)
    # TODO: Implement this method
    raise(GraphQL::RequiredImplementationMissingError)
  end

  max_query_string_tokens(5000)
  validate_max_errors(100)

  def self.id_from_object(object, type_definition, query_ctx)
    object.to_gid_param
  end

  def self.object_from_id(global_id, query_ctx)
    GlobalID.find(global_id)
  end
end
