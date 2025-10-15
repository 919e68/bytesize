class Session < ApplicationRecord
  include SnowflakeId

  belongs_to :user
end
