FactoryBot.define do
  factory :snack do
    association :user

    sequence(:name) { |n| "snack-#{n}" }
    sequence(:description) { |n| "snack description #{n}" }
  end
end
