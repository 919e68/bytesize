class User < ApplicationRecord
  has_many :sessions
  has_many :snacks
  has_many :ratings

  has_many :snack_flavors, through: :snacks
  has_many :flavors, through: :snack_flavors

  has_secure_password

  validates :username, presence: true
  validates :name, presence: true
  validates :password, presence: true
end
