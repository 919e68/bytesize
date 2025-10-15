describe Types::SessionType, type: :graphql do
  subject { described_class }

  describe 'fields' do
    it { is_expected.to have_field(:user).of_type('User!') }
    it { is_expected.to have_field(:sid).of_type('String!') }
    it { is_expected.to have_field(:access_token).of_type('String!') }
    it { is_expected.to have_field(:expires_at).of_type('ISO8601DateTime') }
    it { expect(described_class).to have_field(:created_at).of_type('ISO8601DateTime!') }
    it { expect(described_class).to have_field(:updated_at).of_type('ISO8601DateTime!') }
  end
end
