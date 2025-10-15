RSpec::Matchers.define :have_error_code do |expected_code|
  match do |actual|
    actual.errors.any? do |error|
      error.is_a?(Hash) ? error[:code] == expected_code : error == expected_code
    end
  end

  failure_message do |actual|
    "expected #{actual.errors.inspect} to include an error with code #{expected_code.inspect}"
  end

  failure_message_when_negated do |actual|
    "expected #{actual.errors.inspect} not to include an error with code #{expected_code.inspect}"
  end

  description do
    "have error code #{expected_code.inspect}"
  end
end
