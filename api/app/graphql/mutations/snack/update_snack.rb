module Mutations::Snack
  class UpdateSnack < Mutations::BaseMutation
    type Types::SnackType
    description 'update a snack'
    null false

    param :id, ID, required: true
    param :attributes, Types::Input::SnackAttributesType, required: true

    attribute :flavor_ids, transform: ->(value) { value.uniq.map(&:to_i) if value.present? }

    def resolve(_args)
      authorize!(Snack, :update?)

      interactor = Interactors::Snack::UpdateSnack.call(id: params[:id], attributes: attributes, user: current_user)
      raise Error::GraphqlError.new(interactor.errors) if interactor.failure?

      interactor.data
    end
  end
end
