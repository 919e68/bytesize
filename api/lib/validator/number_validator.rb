module Validator
  class NumberValidator < BaseValidator
    def validate
      return true if @options[:null] && @value.nil?
      @value.is_a?(Integer) || @value.is_a?(Float) || defined?(BigDecimal) && @value.is_a?(BigDecimal)
    end

    def message
      @options[:message] || default_message
    end

    private

    def default_message
      "#{@field.to_s.underscore.upcase}_MUST_BE_NUMBER".freeze
    end
  end
end
