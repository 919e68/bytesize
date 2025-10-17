module Types::Input
  class RatingAttributesType < Types::Base::InputObject
    argument :user_id, ID, required: false
    argument :snack_id, ID, required: false
    argument :rate, Float, required: false
    argument :comment, String, required: false
  end
end
