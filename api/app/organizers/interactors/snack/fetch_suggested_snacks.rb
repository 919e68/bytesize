module Interactors::Snack
  class FetchSuggestedSnacks < Interactors::BaseInteractor
    include Interactor::PaginationSupport
    include Interactor::FilterSupport
    include Interactor::ContextValidator

    params :filters, :user

    validate :filters, :array do
      attribute :type, :required
      attribute :value, :optional
    end

    filter :flavor_id, ->(value) do
      if value.present?
        joins(:snack_flavors).where(snack_flavors: { flavor_id: value }).distinct
      end
    end

    def call
      snacks = Snack.select("snacks.*").all

      if user.present?
        snacks = snacks
          .select("COALESCE(ROUND((match_levels.match_count / match_levels.flavor_count) * 10), 0) AS flavor_match_score")
          .joins("LEFT JOIN (#{flavor_count_query.to_sql}) AS match_levels ON match_levels.snack_id = snacks.id")
          .where.not(user_id: user.id)
          .order("flavor_match_score DESC")
      end

      context.data = snacks
    end

    private

    def get_preferred_flavor_ids
      return [] unless user
      user.snacks.joins(:flavors).pluck('flavors.id').uniq
    end

    def flavor_count_query
      flavor_ids = get_preferred_flavor_ids
      SnackFlavor
        .select(
          "snack_id",
          "COUNT(*) AS flavor_count",
          flavor_ids.any? ? "SUM(CASE WHEN flavor_id IN (#{get_preferred_flavor_ids.join(',')}) THEN 1 ELSE 0 END) AS match_count" : "0 AS match_count"
        )
        .group(:snack_id)
    end
  end
end
