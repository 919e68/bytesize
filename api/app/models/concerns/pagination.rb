module Pagination
  extend ActiveSupport::Concern

  DEFAULT_LIMIT = 100

  included do
    scope :paginate, ->(page: 1, limit: DEFAULT_LIMIT) {
      page = page < 1 ? 1 : page
      limit = limit < 1 ? DEFAULT_LIMIT : limit

      offset((page - 1) * limit).limit(limit)
    }
  end
end

