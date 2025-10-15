module Types
  class UserType < Base::Model
    field :username, String, null: false
    field :name, String, null: false
  end
end
