module Mutations
  class BaseMutation < GraphQL::Schema::Mutation
    include CurrentSession
    include Graphql::ParamSupport
    include Graphql::AttributeSupport

    include ::Auth::Concerns::Authorization

    object_class Types::Base::Object
    field_class Types::Base::Field
    argument_class Types::Base::Argument
  end
end
