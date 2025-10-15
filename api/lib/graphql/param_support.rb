module Graphql
  module ParamSupport
    extend ActiveSupport::Concern

    included do
      class_attribute :_graphql_params, default: {}
    end

    class_methods do
      def param(name, type, transform: nil, required: false, **kwargs)
        argument name, type, required: required, **kwargs

        self._graphql_params = _graphql_params.merge(
          name.to_sym => transform
        )
      end
    end

    def params
      @__graphql_params ||= begin
        arguments.to_h.each_with_object({}) do |(key, opts), hash|
          transform = self.class._graphql_params[key]
          raw_value = arguments[key]
          value = transform ? transform.call(raw_value) : raw_value
          hash[key] = value
        end
      end
    end
  end
end
