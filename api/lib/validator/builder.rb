# frozen_string_literal: true

module Validator
  class Builder
    attr_accessor :context

    def initialize(context)
      @context = context
    end

    def instantiate(rule)
      type = rule[:type]
      field = rule[:field]
      options = rule[:options] || {}
      block = rule[:block]

      case type
      when Symbol
        build_from_registry(type, field, options, &block)
      when Class
        validate_class_type(type)
        type.new(@context, field, options, &block)
      else
        raise ArgumentError, "Invalid validator type: #{type.inspect}"
      end
    end

    private

    def build_from_registry(type, field, options, &block)
      klass = Validator::Registry::MAP[type]
      raise ArgumentError, "Invalid validator type: #{type.inspect}" unless klass

      klass.new(@context, field, options, &block)
    end

    def validate_class_type(klass)
      unless klass <= Validator::BaseValidator
        raise ArgumentError, "Invalid validator class #{klass} must inherit from Validator::BaseValidator"
      end
    end
  end
end
