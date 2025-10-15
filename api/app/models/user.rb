class User < ApplicationRecord
  has_many :sessions
  has_many :snacks
  has_many :ratings

  has_secure_password
end
