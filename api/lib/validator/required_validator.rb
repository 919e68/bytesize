module Validator
  class RequiredValidator < BaseValidator
    def validate
      return false if @value.nil?
      return false if @value.respond_to?(:empty?) && @value.empty?
      true
    end

    def message
      @options[:message] || default_message
    end

    private

    def default_message
      "#{@field.to_s.underscore.upcase}_IS_REQUIRED".freeze
    end
  end
end
