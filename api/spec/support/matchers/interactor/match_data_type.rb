RSpec::Matchers.define :match_data_type do |expected|
  match do |interactor|
    @actual = interactor.data
    @actual.is_a?(expected)
  end

  failure_message do |_interactor|
    if @actual.nil?
      "expected data to be of type #{expected}, but it was nil"
    else
      "expected data to be of type #{expected}, but got #{@actual.class}"
    end
  end

  failure_message_when_negated do |_interactor|
    "expected data not to be of type #{expected}, but it was"
  end

  description do
    "have data of type #{expected}"
  end
end
