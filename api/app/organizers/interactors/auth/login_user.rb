module Interactors::Auth
  class LoginUser < Interactors::BaseInteractor
    include Interactor::ContextValidator

    params :username, :password

    validate :username, :required
    validate :password, :required

    def call
      account = ::Auth::Account.new(
        type: ::Auth::AccountType::USER,
        username: username,
        password: password
      )

      session = Auth::Authentication.login(account)
      raise Error::ErrorCode.new('AUTHENTICATION_FAILED', :unauthorized) unless session

      context.data =  {
        token: session.access_token,
        expires_at: session.expires_at,
        user: session.user
      }
    end
  end
end
