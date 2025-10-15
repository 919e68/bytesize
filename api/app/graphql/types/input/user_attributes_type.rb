module Types::Input
  class UserAttributesType < Types::Base::InputObject
    argument :username, ID, required: false
    argument :name, String, required: false
    argument :password, String, required: false
  end
end
