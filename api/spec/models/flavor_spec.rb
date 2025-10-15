RSpec.describe Flavor, type: :model do
  describe 'associations' do
    it { should have_many(:snack_flavors) }
    it { should have_many(:snacks).through(:snack_flavors) }
  end

  describe 'validations' do
    it { should validate_presence_of(:name) }
  end
end
