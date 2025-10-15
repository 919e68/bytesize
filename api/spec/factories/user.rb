FactoryBot.define do
  factory :user do
    sequence(:username) { |n| "username-#{n}" }
    sequence(:name) { |n| "name #{n}" }
    sequence(:password) { |n| "secret" }
  end
end
