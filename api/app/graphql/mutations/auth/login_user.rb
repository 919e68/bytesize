module Mutations::Auth
  class LoginUser < Mutations::BaseMutation
    type Types::Custom::LoginResultType
    description 'authorize a user'
    null false

    argument :username, String, required: true
    argument :password, String, required: true

    def resolve(username:, password:)
      interactor = Interactors::Auth::LoginUser.call(
        username: username,
        password: password
      )

      context[:auth_token] = interactor.data[:token]

      interactor.data
    end
  end
end
