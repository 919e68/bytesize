RSpec.describe SnackFlavor, type: :model do
  describe 'associations' do
    it { should belong_to(:snack) }
    it { should belong_to(:flavor) }
  end

  describe 'validations' do
    it { should validate_presence_of(:snack) }
    it { should validate_presence_of(:flavor) }
  end
end
