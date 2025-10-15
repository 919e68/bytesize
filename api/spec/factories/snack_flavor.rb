FactoryBot.define do
  factory :snack_flavor do
    association :snack
    association :flavor
  end
end
