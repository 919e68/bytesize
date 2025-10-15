RSpec::Matchers.define :remove do |expected_record|
  match do |interactor_result|
    record_class = expected_record.class
    record_id = expected_record.id

    expected_record.destroyed? ||
      !record_class.exists?(record_id)
  rescue ActiveRecord::RecordNotFound
    true
  end

  failure_message do
    "expected #{expected_record.class} with id=#{expected_record.id} to be removed, but it still exists in the database"
  end

  failure_message_when_negated do
    "expected #{expected_record.class} with id=#{expected_record.id} not to be removed, but it was removed"
  end

  description do
    "remove the given record from the database"
  end
end
