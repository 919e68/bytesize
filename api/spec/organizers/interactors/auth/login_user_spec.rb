describe Interactors::Auth::LoginUser, type: :interactor do
  let(:session_id) { Snowflake.id.to_s }
  let(:access_token) { JsonWebToken.encode({ session_id: session_id }) }
  let(:user) { create(:user, username: 'example', password: 'example') }
  let(:session) { create(:session, sid: session_id, user: user, access_token: access_token) }
  let(:params) { { username: 'example', password: 'example' } }

  subject { described_class.call(**params) }

  before do
    session
  end

  describe '.call' do
    context 'with valid parameters' do
      it { is_expected.to be_success }
      it { is_expected.to have_empty_errors }
      it { is_expected.to match_data_type Hash }
      it { is_expected.to match_data({ token: access_token, expires_at: session.expires_at, user: user }) }
    end

    context 'with invalid parameters' do
      context 'when password is incorrect' do
        let(:params) { { username: 'example', password: 'incorrect' } }
        it { expect { subject }.to raise_error(Error::ErrorCode, 'AUTHENTICATION_FAILED') }
      end

      context 'when username is empty' do
        let(:params) { { username: '', password: 'incorrect' } }
        it { is_expected.to have_error_code 'USERNAME_IS_REQUIRED' }
      end

      context 'when password empty' do
        let(:params) { { username: 'example', password: '' } }
        it { is_expected.to have_error_code 'PASSWORD_IS_REQUIRED' }
      end
    end
  end
end
