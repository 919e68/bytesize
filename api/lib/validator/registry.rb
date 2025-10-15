module Validator
  module Registry
    MAP = {
      required: Validator::RequiredValidator,
      number: Validator::NumberValidator,
      hash:  Validator::HashValidator,
      array: Validator::ArrayValidator
    }.freeze

    def self.for(symbol)
      klass = MAP[symbol]
      raise ArgumentError, "Unknown validator type: #{symbol.inspect}" unless klass
      klass
    end
  end
end
