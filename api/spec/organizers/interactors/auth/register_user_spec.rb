describe Interactors::Auth::RegisterUser, type: :interactor do
  let(:attributes) { { username: 'example', name: 'Bruce Wayne', password: 'secret123' } }

  subject { described_class.call(attributes: attributes) }

  describe '.call' do
    context 'with valid parameters' do
      it { is_expected.to be_success }
      it { is_expected.to have_empty_errors }
      it { is_expected.to match_data_type User }
      it { is_expected.to match_data User.last }
    end

    context 'with invalid parameters' do
      let(:attributes) { {} }

      it { is_expected.to be_failure }
      it { is_expected.to have_errors }

      context 'when empty attributes' do
        let(:attributes) do
          {
            username: nil,
            name: nil,
            password: nil
          }
        end

        it { is_expected.to have_error_code 'ATTRIBUTES_USERNAME_IS_REQUIRED' }
        it { is_expected.to have_error_code 'ATTRIBUTES_NAME_IS_REQUIRED' }
        it { is_expected.to have_error_code 'ATTRIBUTES_PASSWORD_IS_REQUIRED' }
      end

      context 'when username already exists' do
        before do
          create(:user, username: 'existing_example')
        end

        let(:attributes) do
          {
            username: 'existing_example',
            name: 'Bruce Wayne',
            password: 'secret123'
          }
        end

        it 'returns already exists' do
          expect { subject }.to raise_error(Error::ErrorCode, 'USERNAME_ALREADY_EXISTS')
        end
      end
    end
  end
end
