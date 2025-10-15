module Validator
  class ArrayValidator < BaseValidator
    def attribute(field, type = nil, **options, &block)
      return if [ nil, :optional ].include?(type)

      validate_type(type)

      types = Array(type)
      @rules.concat(types.map { |item| { field: field, type: item, options: options, block: block } })
    end

    def validate
      return true if @options[:null] && @value.nil?
      return (@errors << { code: "#{@field.to_s.underscore.upcase}_MUST_BE_AN_ARRAY" }; false) unless @value.is_a?(Array)

      validators = build_validators
      is_valid  = true

      validators.each_with_index do |validator, index|
        unless validator.validate
          is_valid = false
          field_name = @field.to_s.underscore.upcase
          item_index = validator.options[:index]

          if validator.is_a?(HashValidator)
            validator.errors.each do |error|
              @errors << { code: "#{field_name}[#{item_index}]_#{error[:code]}" }
            end
          else
            @errors << { code: "#{field_name}[#{item_index}]_#{validator.message}" }
          end
        end
      end

      is_valid
    end

    private

    def build_validators
      result = []

      @rules.each do |rule|
        @value.each_with_index do |item, index|
          builder = Builder.new(item)
          rule[:options][:index] = index
          result << builder.instantiate(rule)
        end
      end

      result
    end

    def validate_type(type)
      raise ArgumentError, "Invalid validator type: #{type.inspect}" if type.blank?

      return type.each { |t| validate_type(t) } if type.is_a?(Array)

      if type.is_a?(Symbol)
        raise ArgumentError, "Invalid validator type: #{type.inspect}" unless Validator::Registry::MAP.key?(type)
      elsif type.is_a?(Class)
        raise ArgumentError, "Invalid validator class: #{type.inspect}" unless type <= Validator::BaseValidator
      else
        raise ArgumentError, "Invalid validator type: #{type.inspect}"
      end
    end
  end
end
