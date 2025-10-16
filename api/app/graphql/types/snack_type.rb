module Types
  class SnackType < Base::Model
    association :user, UserType, null: false
    association :snack_flavors, [ SnackFlavorType ], null: false

    field :name, String, null: false
    field :icon, String, null: true
    field :description, String, null: true
    field :flavor_match_score, Int, null: true

    def flavor_match_score
      object.respond_to?(:flavor_match_score) ? object.flavor_match_score : nil
    end
  end
end
