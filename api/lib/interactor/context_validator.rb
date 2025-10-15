module Interactor
  module ContextValidator
    extend ActiveSupport::Concern

    included do
      class_attribute :validation_rules, instance_writer: false, default: []
      before :validate_context!
    end

    class_methods do
      def validate(field, type = nil, **options, &block)
        types =
          case type
          when Array then type
          when Symbol, Class then [ type ]
          when NilClass then []
          else
            raise ArgumentError, "Invalid validator type: #{type.inspect}"
          end

        new_rules = types.map do |type|
          { field: field, type: type, options: options, block: block }
        end

        self.validation_rules += validation_rules + new_rules
      end

      def optional(field)
      end

      private

      def validate_class_type(klass)
      end
    end

    private

    def validate_context!
      if context.respond_to?(:errors)
        context.errors ||= []
      else
        context[:errors] ||= [] if context.respond_to?(:[])
      end

      validation_rules.each do |rule|
        validator = instantiate_validator(rule)
        next unless validator

        unless validator.validate
          validator_errors = [ :array, :hash ].include?(rule[:type]) ? validator.errors : [ { code: validator.message } ]
          context.errors += validator_errors
        end
      end

      context.fail! if context.errors.any?
    end

    def instantiate_validator(rule)
      type = rule[:type]
      field = rule[:field]
      options = rule[:options] || {}
      block = rule[:block]

      case type
      when :hash
        klass = Validator::Registry::MAP[:hash]
        raise ArgumentError, 'Unknown validator type: :hash' unless klass
        klass.new(context, field, options, &block)
      when :array
        klass = Validator::Registry::MAP[:array]
        raise ArgumentError, 'Unknown validator type: :array' unless klass
        klass.new(context, field, options, &block)
      when Symbol
        klass = Validator::Registry::MAP[type]
        raise ArgumentError, "Unknown validator type: #{type}" unless klass
        klass.new(context, field, options, &block)
      when Class
        self.class.send(:validate_class_type, type)
        type.new(context, field, options, &block)
      else
        raise ArgumentError, "Invalid validator type: #{type.inspect}"
      end
    end
  end
end
