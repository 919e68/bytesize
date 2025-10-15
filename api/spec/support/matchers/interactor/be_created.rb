RSpec::Matchers.define :be_created do
  match do |interactor|
    @record = interactor.data
    @record.present? && @record.persisted?
  end

  failure_message do |_interactor|
    if @record.nil?
      "expected a record to be created, but it was nil"
    elsif !@record.respond_to?(:persisted?)
      "expected a record that responds to `persisted?`, but got #{@record.class.name}"
    elsif !@record.persisted?
      "expected the record to be persisted in the database, but it was not"
    else
      "expected the record to be created, but it was not"
    end
  end

  failure_message_when_negated do |_interactor|
    "expected the record not to be created, but it was"
  end

  description do
    "be created"
  end
end
