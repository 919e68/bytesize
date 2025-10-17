module Types::Custom
  class FeaturedSnackType < Types::Base::Object
    field :feature_type, String, null: false
    field :snack, Types::SnackType, null: true
  end
end
