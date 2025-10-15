module Types
  class FilterInputType < Types::Base::InputObject
    argument :type, String, required: true
    argument :value, GraphQL::Types::JSON, required: true
  end
end
