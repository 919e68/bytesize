RSpec::Matchers.define :match_data do |expected|
  match do |interactor|
    @actual = interactor.data
    @actual == expected
  end

  failure_message do |_interactor|
    <<~MSG.strip
      expected data to match:
      Expected: #{formatted(expected)}
      Actual:   #{formatted(@actual)}
    MSG
  end

  failure_message_when_negated do |_interactor|
    <<~MSG.strip
      expected data not to match:
      Actual: #{formatted(@actual)}
    MSG
  end

  description do
    "have data matching #{expected.inspect}"
  end

  def formatted(value)
    case value
    when nil
      'nil'
    when Array, Hash
      value.inspect
    else
      value.respond_to?(:to_a) ? value.to_a.inspect : value.inspect
    end
  end
end
