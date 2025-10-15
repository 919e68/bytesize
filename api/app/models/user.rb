class User < ApplicationRecord
  has_many :sessions
  has_many :snacks
  has_many :ratings

  has_secure_password

  validates :username, presence: true
  validates :name, presence: true
  validates :password, presence: true
end
