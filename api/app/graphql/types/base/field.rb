# frozen_string_literal: true

module Types::Base
  class Field < GraphQL::Schema::Field
    argument_class Types::Base::Argument
    connection_extension Graphql::PaginatedConnectionExtension
  end
end
