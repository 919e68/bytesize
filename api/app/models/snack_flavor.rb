class SnackFlavor < ApplicationRecord
  belongs_to :snack
  belongs_to :flavor

  validates :snack, presence: true
  validates :flavor, presence: true
end
