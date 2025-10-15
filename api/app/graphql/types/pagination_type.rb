module Types
  class PaginationType < Types::Base::Object
    field :page, Integer, null: true
    field :pages, Integer, null: true
    field :limit, Integer, null: true
    field :count, Integer, null: true
    field :prev, Boolean, null: true
    field :next, Boolean, null: true, resolver_method: :has_next_page

    def has_next_page
      object[:next]
    end
  end
end
