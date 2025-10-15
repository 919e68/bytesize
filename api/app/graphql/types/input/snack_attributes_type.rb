module Types::Input
  class SnackAttributesType < Types::Base::InputObject
    argument :name, ID, required: false
    argument :icon, String, required: false
    argument :description, String, required: false
    argument :flavor_ids, [ ID ], required: false
  end
end
