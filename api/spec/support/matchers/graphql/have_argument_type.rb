RSpec::Matchers.define :have_argument_type do |argument_name, expected_type|
  field_name = argument_name.to_s.camelize(:lower)
  match do |graphql_type|
    argument = graphql_type.arguments[field_name]
    argument && argument.type.to_type_signature == expected_type
  end

  failure_message do |graphql_type|
    arg = graphql_type.arguments[field_name]
    actual = arg ? arg.type.to_type_signature : 'nil'
    "expected #{graphql_type} to have argument `#{argument_name}` of type `#{expected_type}`, but got `#{actual}`"
  end

  description do
    "have argument `#{argument_name}` of type `#{expected_type}`"
  end
end
