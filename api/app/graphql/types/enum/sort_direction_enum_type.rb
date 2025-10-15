module Types::Enum
  class SortDirectionEnumType < Types::Base::Enum
    value 'ASC', value: 'asc'
    value 'DESC', value: 'desc'
  end
end
