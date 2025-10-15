module Mutations::Snack
  class CreateSnack < Mutations::BaseMutation
    type Types::SnackType
    description 'create a snack'
    null false

    param :attributes, Types::Input::SnackAttributesType, required: true

    def resolve(_args)
      authorize!(Snack, :create?)

      interactor = Interactors::Snack::CreateSnack.call(attributes: attributes, user: current_user)
      raise Error::GraphqlError.new(interactor.errors) if interactor.failure?

      interactor.data
    end
  end
end
