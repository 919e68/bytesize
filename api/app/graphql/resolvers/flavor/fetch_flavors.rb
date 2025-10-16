module Resolvers::Flavor
  class FetchFlavors < Resolvers::BaseResolver
    type Types::FlavorType.connection_type, null: false
    description 'fetch all flavors'

    param :filters, [ Types::FilterInputType ]
    param :order, [ Types::OrderInputType ]

    def resolve(_args)
      interactor = Interactors::Flavor::FetchFlavors.call(
        filters: filters,
        order: order
      )
      interactor.data
    end
  end
end
