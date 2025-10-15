module Types
  class FlavorType < Base::Model
    field :name, String, null: false
    field :icon, String, null: true
    field :description, String, null: true
  end
end
