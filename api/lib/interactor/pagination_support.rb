module Interactor
  module PaginationSupport
    extend ActiveSupport::Concern

    DEFAULT_LIMIT = 100

    included do
      after :apply_pagination
    end

    private

    def apply_pagination
      return unless context.data.is_a?(ActiveRecord::Relation)

      scope = context.data

      query_order  = context.order
      query_limit  = context.limit.present? ? context.limit.to_i : DEFAULT_LIMIT
      query_offset = context.offset.present? ? context.offset.to_i : 0
      query_page   = context.page.present? ? context.page.to_i : 1
      total_count  = scope.count

      if [ query_page, query_limit, total_count ].all?(&:present?)
        total_pages = total_count.positive? ? (total_count.to_f / query_limit).ceil : 0

        if (total_pages.positive? && query_page > total_pages) || query_page <= 0
          raise Error::ErrorCode.new('INVALID_PAGE_NUMBER', :unprocessable_content)
        end

        context.pagination = {
          page: query_page,
          pages: total_pages,
          limit: query_limit,
          count: total_count,
          prev: query_page > 1,
          next: query_page < total_pages
        }
      end

      scope = scope.order(**query_order) if query_order.present?
      scope = scope.limit(query_limit)
      scope = scope.offset(query_offset) if query_offset.present?
      scope = scope.offset((query_page - 1) * query_limit) if query_page.present?

      context.data = scope
    end
  end
end
