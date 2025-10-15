module Types
  class SnackType < Base::Model
    association :user, UserType, null: false
    association :snack_flavors, [ SnackFlavorType ], null: false

    field :name, String, null: false
    field :icon, String, null: true
    field :description, String, null: true

  end
end
