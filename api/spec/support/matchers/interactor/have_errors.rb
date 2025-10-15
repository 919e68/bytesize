RSpec::Matchers.define :have_errors do
  match do |interactor|
    @errors = extract_errors(interactor)
    @errors.any?
  end

  failure_message do |_interactor|
    "expected the interactor to have errors, but found: #{format_errors(@errors)}"
  end

  failure_message_when_negated do |_interactor|
    "expected the interactor not to have errors, but found: #{format_errors(@errors)}"
  end

  description do
    'have validation or processing errors'
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
    if errors.nil? || errors.empty?
      '[]'
    else
      errors.is_a?(Array) ? errors.inspect : errors.to_s
    end
  end
end
