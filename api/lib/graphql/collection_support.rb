module Graphql
  module CollectionSupport
    extend ActiveSupport::Concern

    class_methods do
      def collection_type
        @collection_type ||= begin
          base_type = self
          coll_name = "#{base_type.graphql_name}Collection"

          Class.new(Types::Base::Object) do
            graphql_name(coll_name)

            field :items, [ base_type ], null: true
            field :pagination, Types::PaginationType, null: true

            define_method :items do
              object.data
            end

            define_method :pagination do
              object.pagination
            end
          end
        end
      end
    end
  end
end
