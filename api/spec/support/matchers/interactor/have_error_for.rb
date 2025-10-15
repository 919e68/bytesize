RSpec::Matchers.define :have_error_for do |expected_path|
  match do |interactor|
    @errors = extract_errors(interactor)
    @errors.any? { |error| error[:path].to_s == expected_path.to_s }
  end

  failure_message do |_interactor|
    "expected errors to include a hash with path: '#{expected_path}', " \
    "but none was found.\nActual errors: #{format_errors(@errors)}"
  end

  failure_message_when_negated do |_interactor|
    "expected errors not to include a hash with path: '#{expected_path}', " \
    "but it was found.\nActual errors: #{format_errors(@errors)}"
  end

  description do
    "have an error for path '#{expected_path}'"
  end

  def extract_errors(interactor)
    if interactor.respond_to?(:errors)
      interactor.errors || []
    elsif interactor.respond_to?(:context)
      interactor.context[:errors] || []
    else
      []
    end
  end

  def format_errors(errors)
    errors.nil? || errors.empty? ? '[]' : errors.inspect
  end
end
