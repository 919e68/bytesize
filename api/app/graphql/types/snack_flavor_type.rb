module Types
  class SnackFlavorType < Base::Model
    association :snack, SnackType, null: false
    association :flavor, FlavorType, null: false
  end
end
