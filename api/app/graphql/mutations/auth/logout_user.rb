module Mutations::Auth
  class LogoutUser < Mutations::BaseMutation
    type Boolean
    description 'logout a user'
    null false

    def resolve
      return false unless current_user

      session = current_session
      session.destroy!

      context[:auth_token] = :logout

      true
    end
  end
end
