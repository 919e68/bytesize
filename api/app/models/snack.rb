class Snack < ApplicationRecord
  belongs_to :user
  has_many :snack_flavors
  has_many :flavors, through: :snack_flavors

  validates :user, presence: true
  validates :name, presence: true
end
