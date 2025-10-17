module Interactor
  module FilterSupport
    extend ActiveSupport::Concern

    included do
      class_attribute :_interactor_filters, default: {}
      after :apply_filters
    end

    class_methods do
      def filter(name, proc)
        self._interactor_filters = _interactor_filters.merge(name.to_sym => proc)
      end
    end

    private

    def apply_filters
      return unless context.data.is_a?(ActiveRecord::Relation)

      filters_input = context.filters || []
      return if filters_input.blank? || self.class._interactor_filters.empty?

      scope = context.data

      filters_input.each do |filter|
        type = filter[:type].to_s.underscore.to_sym
        value = filter[:value]

        next unless value.present?

        if self.class._interactor_filters.key?(type)
          scope = scope.instance_exec(value, &self.class._interactor_filters[type])
        end
      end

      context.data = scope
    end
  end
end
