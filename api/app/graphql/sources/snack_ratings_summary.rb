module Sources
  class SnackRatingsSummary < GraphQL::Dataloader::Source
    def fetch(snack_ids)
      stats = Rating
        .where(snack_id: snack_ids)
        .group(:snack_id)
        .pluck(:snack_id, Arel.sql('AVG(rate)'), Arel.sql('COUNT(rate)'))
        .each_with_object({}) do |(snack_id, avg, count), hash|
          hash[snack_id] = {
            average: avg.to_f.round(2),
            count: count.to_i
          }
        end

      snack_ids.map do |sid|
        stats[sid] || { average: 0.0, count: 0 }
      end
    end
  end
end