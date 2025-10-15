module Types
  class SessionType < Base::Model
    association :user, UserType, null: false

    field :sid, String, null: false
    field :access_token, String, null: false
    field :expires_at, GraphQL::Types::ISO8601DateTime, null: true
  end
end
