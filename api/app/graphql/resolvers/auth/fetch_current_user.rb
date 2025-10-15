module Resolvers::Auth
  class FetchCurrentUser < Resolvers::BaseResolver
    type Types::UserType, null: true
    description 'fetch current user'
    null true

    def resolve
      authorize!(User, :view?)

      current_user
    end
  end
end
