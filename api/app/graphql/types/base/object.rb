# frozen_string_literal: true

module Types::Base
  class Object < GraphQL::Schema::Object
    field_class Types::Base::Field

    def self.connection_type
      @connection_type ||= Graphql::PaginatedConnectionType.create_type(self)
    end
  end
end
