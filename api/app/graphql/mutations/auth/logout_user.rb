module Mutations::Auth
  class LogoutUser < Mutations::BaseMutation
    type Boolean
    description 'logout a user'
    null false

    def resolve
      authorize!(User, :view?)

      return false unless current_session

      session = current_session
      session.destroy!

      context[:auth_token] = :logout

      true
    end
  end
end
