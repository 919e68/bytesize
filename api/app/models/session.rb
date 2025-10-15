class Session < ApplicationRecord
  include SnowflakeId

  belongs_to :user

  validates :user, presence: true
  validates :access_token, presence: true
end
