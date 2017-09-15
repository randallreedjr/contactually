require 'utility/phone_utilities'

FactoryGirl.define do
  factory :contact do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    email_address { Faker::Internet.email }
    phone_number { Utility::PhoneUtilities.strip_phone_number(Faker::PhoneNumber.cell_phone) } # only numerical characters
    extension { Faker::PhoneNumber.extension }

    trait :with_company do
      company
    end
  end
end
