module Types::Root
  class QueryType < Types::Base::Object
    # auth
    field :fetch_current_user, resolver: Resolvers::Auth::FetchCurrentUser

    # flavor
    field :fetch_flavors, resolver: Resolvers::Flavor::FetchFlavors

    # snack
    field :fetch_snack, resolver: Resolvers::Snack::FetchSnack
    field :fetch_snacks, resolver: Resolvers::Snack::FetchSnacks
    field :fetch_suggested_snacks, resolver: Resolvers::Snack::FetchSuggestedSnacks

  end
end
