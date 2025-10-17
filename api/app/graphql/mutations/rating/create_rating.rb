module Mutations::Rating
  class CreateRating < Mutations::BaseMutation
    type Types::RatingType
    description 'create a rating'
    null false

    param :attributes, Types::Input::RatingAttributesType, required: true

    def resolve(_args)
      authorize!(Rating, :create?)

      interactor = Interactors::Rating::CreateRating.call(attributes: attributes, user: current_user)
      raise Error::GraphqlError.new(interactor.errors) if interactor.failure?

      interactor.data
    end
  end
end
