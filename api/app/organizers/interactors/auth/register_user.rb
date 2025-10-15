module Interactors::Auth
  class RegisterUser < Interactors::BaseInteractor
    include Interactor::ContextValidator

    params :attributes

    validate :attributes, :hash do
      attribute :username, :required
      attribute :name, :required
      attribute :password, :required
    end

    def call
      validate!

      context.data = User.create!(attributes.compact)
    end

    private

    def validate!
      username_lookup = User.find_by(username: attributes[:username])
      raise Error::ErrorCode.new('USERNAME_ALREADY_EXISTS', :unprocessable_entity) if username_lookup
    end
  end
end
