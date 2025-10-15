RSpec::Matchers.define :have_updated_attributes do |attributes, model|
  match do
    model.reload
    attributes.all? do |attr, expected_value|
      actual_value = model.public_send(attr)
      values_match?(expected_value, actual_value)
    end
  end

  failure_message do
    model.reload
    mismatches = attributes.each_with_object({}) do |(attr, expected_value), h|
      actual_value = model.public_send(attr)
      h[attr] = { expected: expected_value, got: actual_value } unless values_match?(expected_value, actual_value)
    end

    "expected #{model.class} to have updated attributes, but found mismatches:\n" +
      mismatches.map { |attr, diff|
        "  #{attr}: expected #{diff[:expected].inspect}, got #{diff[:got].inspect}"
      }.join("\n")
  end

  description do
    "have updated attributes matching the expected values after reload"
  end
end
