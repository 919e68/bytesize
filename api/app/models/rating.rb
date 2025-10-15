class Rating < ApplicationRecord
  belongs_to :user
  belongs_to :snack

  validates :user, presence: true
  validates :snack, presence: true
  validates :rate, presence: true
end
