module Resolvers::Snack
  class FetchFeaturedSnack < Resolvers::BaseResolver
    type Types::Custom::FeaturedSnackType, null: false
    description 'fetch a featured snack'

    param :feature_type, String, required: true

    def resolve(_args)
      interactor = Interactors::Snack::FetchFeaturedSnack.call(feature_type: params[:feature_type])
      interactor.data
    end
  end
end
