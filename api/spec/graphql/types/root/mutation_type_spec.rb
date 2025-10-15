describe Types::Root::MutationType, type: :graphql do
  subject { described_class }

  describe 'fields' do
    it { is_expected.to have_field(:login_user).of_type('LoginResult!') }
    it { is_expected.to have_field(:logout_user).of_type('Boolean!') }

    it { is_expected.to have_field(:register_user).of_type('User!') }
  end
end
