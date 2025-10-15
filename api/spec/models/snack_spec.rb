RSpec.describe Snack, type: :model do
  describe 'associations' do
    it { should belong_to(:user) }
    it { should have_many(:snack_flavors) }
    it { should have_many(:flavors).through(:snack_flavors) }
  end

  describe 'validations' do
    it { should validate_presence_of(:user) }
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:description) }
  end
end
