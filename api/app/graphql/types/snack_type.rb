module Types
  class SnackType < Base::Model
    association :user, UserType, null: false
    association :snack_flavors, [ SnackFlavorType ], null: false

    field :name, String, null: false
    field :icon, String, null: true
    field :description, String, null: true
    field :flavor_match_score, Int, null: true
    field :average_rating, Float, null: false
    field :rating_count, Integer, null: false
    field :current_user_rating, Float, null: true

    def flavor_match_score
      object.respond_to?(:flavor_match_score) ? object.flavor_match_score : nil
    end

    def average_rating
      dataloader.with(Sources::SnackRatingsSummary).load(object.id).then { |r| r[:average] }
    end

    def rating_count
      dataloader.with(Sources::SnackRatingsSummary).load(object.id).then { |r| r[:count] }
    end

    def current_user_rating
      user_id = context&.current_session&.user_id
      return nil unless user_id

      dataloader
        .with(Sources::CurrentUserRating, user_id: user_id)
        .load(object.id)
    end
  end
end
