class Snack < ApplicationRecord
  belongs_to :user

  has_many :snack_flavors
  has_many :flavors, through: :snack_flavors
  has_many :ratings

  validates :user, presence: true
  validates :name, presence: true
end
