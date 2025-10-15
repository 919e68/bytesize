module Resolvers::Snack
  class FetchSnack < Resolvers::BaseResolver
    type Types::SnackType, null: false
    description 'fetch a snacks'

    param :id, ID, required: true

    def resolve(_args)
      authorize!(Snack, :view?)

      interactor = Interactors::Snack::FetchSnack.call(id: params[:id], user: current_user)
      interactor.data
    end
  end
end
