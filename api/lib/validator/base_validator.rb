module Validator
  class BaseValidator
    attr_reader :context, :field, :value, :options, :errors, :rules

    def initialize(context, field, options = {}, &block)
      raise ArgumentError, 'Field cannot be empty' unless field.present?

      @context = context
      @field = field
      @value = context&.respond_to?(:[]) ? context[field] : context&.try(field)
      @options = options

      @rules = []
      @errors = []

      instance_eval(&block) if block_given?
    end

    def validate
      raise NotImplementedError, "#{self.class} must implement #validate"
    end
  end
end
