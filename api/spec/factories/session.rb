FactoryBot.define do
  factory :session do
    association :user

    access_token { 'secret123' }
  end
end
