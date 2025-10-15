module Types
  class OrderInputType < Base::InputObject
    argument :field, String, required: true
    argument :direction, Enum::SortDirectionEnumType, required: true
  end
end
