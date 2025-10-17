module Types::Root
  class MutationType < Types::Base::Object
    # auth
    field :register_user, mutation: Mutations::Auth::RegisterUser
    field :login_user, mutation: Mutations::Auth::LoginUser
    field :logout_user, mutation: Mutations::Auth::LogoutUser

    # snack
    field :create_snack, mutation: Mutations::Snack::CreateSnack
    field :update_snack, mutation: Mutations::Snack::UpdateSnack
    field :remove_snack, mutation: Mutations::Snack::RemoveSnack

    # rating
    field :create_rating, mutation: Mutations::Rating::CreateRating
  end
end
