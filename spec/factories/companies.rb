# This will guess the User class
FactoryGirl.define do
  factory :company do
    name { Faker::Company.name }
  end
end
