module Graphql
  module FilterSupport
    extend ActiveSupport::Concern

    included do
      class_attribute :_graphql_filters, default: {}
    end

    class_methods do
      def filter(name, transform: nil)
        self._graphql_filters = _graphql_filters.merge(
          name.to_sym => transform
        )
      end
    end

    def filters
      return unless arguments[:filters]

      @__graphql_filters ||= begin
        arguments[:filters].map do |item|
          type = item[:type]
          value = item[:value]

          transform = self.class._graphql_filters[type.to_s.underscore.to_sym]
          value = transform ? transform.call(value) : value

          {
            type: type,
            value: value
          }
        end
      end
    end
  end
end
