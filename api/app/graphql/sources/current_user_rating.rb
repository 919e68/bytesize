module Sources
  class CurrentUserRating < GraphQL::Dataloader::Source
    def initialize(user_id:)
      @user_id = user_id
    end

    def fetch(snack_ids)
      ratings = Rating
        .where(user_id: @user_id, snack_id: snack_ids)
        .pluck(:snack_id, :rate)
        .to_h

      snack_ids.map { |sid| ratings[sid]&.to_f }
    end
  end
end