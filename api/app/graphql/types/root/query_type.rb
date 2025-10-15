module Types::Root
  class QueryType < Types::Base::Object
    # auth
    field :fetch_current_user, resolver: Resolvers::Auth::FetchCurrentUser
  end
end
