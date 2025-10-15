module Mutations::Snack
  class RemoveSnack < Mutations::BaseMutation
    type Types::SnackType, null: false
    description 'removes a snack'

    param :id, ID, required: true

    def resolve(_args)
      authorize!(Snack, :remove?)

      interactor = Interactors::Snack::RemoveSnack.call(id: params[:id], user: current_user)
      raise Error::GraphqlError.new(interactor.errors, :unprocessable_content) if interactor.failure?

      interactor.data
    end
  end
end
