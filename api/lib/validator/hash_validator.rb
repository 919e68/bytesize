module Validator
  class HashValidator < BaseValidator
    def attribute(field, type = nil, **options, &block)
      return if [ nil, :optional ].include?(type)

      validate_type(type)

      types = Array(type)
      @rules.concat(types.map { |item| { field: field, type: item, options: options, block: block } })
    end

    def validate
      return true if @options[:null] && @value.nil?
      return (@errors << { code: "#{@field.to_s.underscore.upcase}_MUST_BE_A_HASH" }; false) unless @value.is_a?(Hash)

      validators = build_validators
      is_valid  = true

      validators.each do |validator|
        unless validator.validate
          is_valid = false
          field_name = @field.to_s.underscore.upcase

          if validator.is_a?(HashValidator)
            validator.errors.each do |error|
              @errors << { code: "#{field_name}_#{error[:code]}" }
            end
          elsif validator.is_a?(ArrayValidator)
            validator.errors.each_with_index do |error, i|
              @errors << { code: "#{field_name}_#{error[:code]}" }
            end
          else
            @errors << { code: "#{field_name}_#{validator.message}" }
          end
        end
      end

      is_valid
    end

    private

    def build_validators
      @rules.map do |rule|
        builder = Builder.new(@value)
        builder.instantiate(rule)
      end
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
