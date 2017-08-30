# This will guess the User class
FactoryGirl.define do
  factory :contact do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    email { Faker::Internet.email }
    phone { Faker::PhoneNumber.phone_number }
    extension { Faker::PhoneNumber.extension }

    trait :with_company do
      company
    end
  end
end
