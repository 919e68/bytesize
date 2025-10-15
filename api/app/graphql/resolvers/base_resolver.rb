module Resolvers
  class BaseResolver < GraphQL::Schema::Resolver
    include CurrentSession
    include Graphql::ParamSupport
    include Graphql::FilterSupport
    include Graphql::OrderSupport

    include ::Auth::Concerns::Authorization

    argument_class Types::Base::Argument
  end
end
