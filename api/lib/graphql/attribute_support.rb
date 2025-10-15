module Graphql
  module AttributeSupport
    extend ActiveSupport::Concern

    included do
      class_attribute :_graphql_attributes, default: {}
    end

    class_methods do
      def attribute(name, transform: nil)
        self._graphql_attributes = _graphql_attributes.merge(
          name.to_sym => transform
        )
      end
    end

    def attributes
      @__graphql_attributes ||= begin
        arguments[:attributes].to_h.each_with_object({}) do |(key, opts), hash|
          transform = self.class._graphql_attributes[key]
          raw_value = arguments[:attributes][key]
          value = transform ? transform.call(raw_value) : raw_value
          hash[key] = value
        end
      end
    end
  end
end
