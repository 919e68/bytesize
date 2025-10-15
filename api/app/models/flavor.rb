class Flavor < ApplicationRecord
  has_many :snack_flavors
  has_many :snacks, through: :snack_flavors
end
