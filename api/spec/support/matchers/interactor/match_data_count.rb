RSpec::Matchers.define :match_data_count do |expected|
  match do |interactor|
    @actual = interactor.data.count
    @actual == expected
  end

  failure_message do |_interactor|
    <<~MSG.strip
      expected data count to match:
      Expected: #{expected}
      Actual:   #{@actual}
    MSG
  end

  failure_message_when_negated do |_interactor|
    <<~MSG.strip
      expected data count not to match:
      Actual: #{@actual}
    MSG
  end

  description do
    "have data count matching #{expected}"
  end
end
