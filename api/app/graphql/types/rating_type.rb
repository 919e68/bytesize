module Types
  class RatingType < Base::Model
    association :user, UserType, null: false
    association :snack, SnackType, null: false

    field :rate, Float, null: false
    field :comment, String, null: true
  end
end
