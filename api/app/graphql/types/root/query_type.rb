module Types::Root
  class QueryType < Types::Base::Object
    # auth
    field :fetch_current_user, resolver: Resolvers::Auth::FetchCurrentUser

    # snack
    field :fetch_snacks, resolver: Resolvers::Snack::FetchSnacks
  end
end
