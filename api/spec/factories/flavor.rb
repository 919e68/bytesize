FactoryBot.define do
  factory :flavor do
    sequence(:name) { |n| "flavor #{n}" }
  end
end
