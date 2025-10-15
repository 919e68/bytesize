describe Types::Root::QueryType, type: :graphql do
  subject { described_class }

  describe 'fields' do
    it { is_expected.to have_field(:fetch_current_user).of_type('User') }
  end
end
