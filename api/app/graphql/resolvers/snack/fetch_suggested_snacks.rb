module Resolvers::Snack
  class FetchSuggestedSnacks < Resolvers::BaseResolver
    type Types::SnackType.connection_type, null: false
    description 'fetch all suggested snacks'

    param :filters, [ Types::FilterInputType ]
    param :order, [ Types::OrderInputType ]

    def resolve(_args)
      interactor = Interactors::Snack::FetchSuggestedSnacks.call(
        filters: filters,
        order: order,
        user: current_user
      )

      interactor.data
    end
  end
end
