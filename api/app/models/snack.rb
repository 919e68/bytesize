class Snack < ApplicationRecord
  belongs_to :user
  has_many :snack_flavors
  has_many :flavors, through: :snack_flavors
end
