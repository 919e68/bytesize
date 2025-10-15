module Graphql
  class PaginatedConnectionType < Types::Base::Object
    def self.create_type(node_type)
      Class.new(self) do
        graphql_name("#{node_type.graphql_name}Connection")
        field :nodes, [ node_type ]
        field :pagination, Types::PaginationType, null: true

        def nodes
          object.items.paginate(page: object.arguments[:page], limit: object.arguments[:limit])
        end

        def pagination
          return unless object.items.is_a?(ActiveRecord::Relation)

          item_count = object.items.except(:limit, :offset).count
          item_limit = object.arguments[:limit]
          current_page = object.arguments[:page]
          total_pages = (item_count / item_limit.to_f).ceil

          {
            page: current_page,
            pages: total_pages,
            limit: item_limit,
            count: item_count,
            prev: current_page > 1 && current_page <= total_pages,
            next: current_page > 0 && current_page < total_pages
          }
        end
      end
    end
  end
end
