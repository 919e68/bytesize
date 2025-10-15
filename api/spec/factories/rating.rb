FactoryBot.define do
  factory :rating do
    association :user
    association :snack

    rate { 5 }
    comment { 'example comment' }
  end
end
