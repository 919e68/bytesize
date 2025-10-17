module Interactors::Rating
  class CreateRating < Interactors::BaseInteractor
    include Interactor::ContextValidator

    params :attributes, :user

    validate :attributes, :hash do
      attribute :snack_id, :required
      attribute :rate, :required
    end
    validate :user, :required

    def call
      rating = Rating.find_by(user_id: user.id, snack_id: attributes[:snack_id])
      rating = Rating.new(user_id: user.id, snack_id: attributes[:snack_id]) unless rating

      rating.rate = attributes[:rate]
      rating.save

      context.data = rating
    end
  end
end
