RSpec::Matchers.define :return_graphql_value do |expected|
  match do |(field, args)|
    run_graphql_field(field, args) == expected
  end

  failure_message do |(field, args)|
    actual = run_graphql_field(field, args)
    "expected #{field} with #{args.inspect} to return #{expected.inspect}, but got #{actual.inspect}"
  end
end
