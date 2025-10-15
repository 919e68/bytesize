module Types::Custom
  class LoginResultType < Types::Base::Object
    field :token, String, null: true
    field :expires_at, GraphQL::Types::ISO8601DateTime, null: true
    field :user, Types::UserType, null: true
  end
end
