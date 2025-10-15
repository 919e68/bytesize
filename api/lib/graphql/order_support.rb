module Graphql
  module OrderSupport
    extend ActiveSupport::Concern

    def order
      return unless arguments[:order]

      @__graphql_order ||= begin
        arguments[:order].each_with_object({}) do |item, hash|
          hash[item[:field]] = item[:direction]
        end
      end
    end
  end
end
