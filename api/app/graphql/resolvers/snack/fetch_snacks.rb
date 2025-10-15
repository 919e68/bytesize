module Resolvers::Snack
  class FetchSnacks < Resolvers::BaseResolver
    type Types::SnackType.connection_type, null: false
    description 'fetch all snacks'

    param :filters, [ Types::FilterInputType ]
    param :order, [ Types::OrderInputType ]

    def resolve(_args)
      authorize!(Snack, :view_all?)

      interactor = Interactors::Snack::FetchSnacks.call(
        filters: filters,
        order: order,
        user: current_user
      )
      interactor.data
    end
  end
end
