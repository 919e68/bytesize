RSpec.describe User, type: :model do
  describe 'associations' do
    it { should have_many(:sessions) }
    it { should have_many(:snacks) }
    it { should have_many(:ratings) }
  end

  describe 'validations' do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:password) }
  end
end
