RSpec::Matchers.define :change_attribute do |attribute, record, options|
  match do |action|
    @attribute = attribute
    @record = record
    @from = options[:from]
    @to = options[:to]

    @before_value = @record.reload.public_send(@attribute)
    action.call
    @after_value = @record.reload.public_send(@attribute)
    @before_value == @from && @after_value == @to
  end

  failure_message do
    "expected #{@record.class}##{@attribute} to change from #{@from.inspect} to #{@to.inspect}, " \
    "but it changed from #{@before_value.inspect} to #{@after_value.inspect}"
  end

  failure_message_when_negated do
    "expected #{@record.class}##{@attribute} not to change from #{@from.inspect} to #{@to.inspect}, " \
    "but it did (changed from #{@before_value.inspect} to #{@after_value.inspect})"
  end

  description do
    "change #{@record.class}##{@attribute} from #{@from.inspect} to #{@to.inspect}"
  end
end
