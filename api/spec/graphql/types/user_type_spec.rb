describe Types::UserType, type: :graphql do
  subject { described_class }

  describe 'fields' do
    it { is_expected.to have_field(:id).of_type('ID!') }
    it { is_expected.to have_field(:username).of_type('String!') }
    it { is_expected.to have_field(:name).of_type('String!') }
    it { expect(described_class).to have_field(:created_at).of_type('ISO8601DateTime!') }
    it { expect(described_class).to have_field(:updated_at).of_type('ISO8601DateTime!') }
  end
end
