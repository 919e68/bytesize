RSpec::Matchers.define :have_empty_errors do
  match do |interactor|
    @errors = extract_errors(interactor)
    @errors.empty?
  end

  failure_message do |_interactor|
    "expected errors to be empty, but found: #{format_errors(@errors)}"
  end

  failure_message_when_negated do |_interactor|
    "expected errors not to be empty, but they were"
  end

  description do
    'have empty errors'
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
