module Interactors::Snack
  class FetchFeaturedSnack < Interactors::BaseInteractor
    include Interactor::ContextValidator

    params :feature_type

    validate :feature_type, :required

    def call
      snack = case feature_type
        when 'today' then highest_rated_snack_today
        when 'all_time' then highest_rated_snack
        end

      context.data = {
        feature_type: feature_type.upcase,
        snack: snack
      }
    end

    private

    def highest_rated_snack_today
      Snack
        .joins(:ratings)
        .where(ratings: { created_at: Time.zone.now.beginning_of_day..Time.zone.now.end_of_day })
        .select("snacks.*, AVG(ratings.rate) AS avg_rating, COUNT(ratings.id) AS ratings_count")
        .group("snacks.id")
        .order("avg_rating DESC, ratings_count DESC")
        .first
    end

    def highest_rated_snack
      Snack
        .joins(:ratings)
        .select("snacks.*, AVG(ratings.rate) AS avg_rating, COUNT(ratings.id) AS ratings_count")
        .group("snacks.id")
        .order("avg_rating DESC, ratings_count DESC")
        .first
    end
  end
end
