module Mutations::Auth
  class RegisterUser < Mutations::BaseMutation
    type Types::UserType, null: false
    description 'creates a user'

    param :attributes, Types::Input::UserAttributesType, required: true

    def resolve(_args)
      interactor = Interactors::Auth::RegisterUser.call(attributes: attributes)
      raise Error::GraphqlError.new(interactor.errors) if interactor.failure?

      interactor.data
    end
  end
end
