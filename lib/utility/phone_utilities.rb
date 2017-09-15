module Utility
  module PhoneUtilities
    def self.strip_phone_number(phone_number)
      phone_number.gsub(/[^\d]/,'')[-10..-1]
    end

    def self.format_phone_number(phone_number)
      phone_number = strip_phone_number(phone_number)
      "(#{phone_number[0...3]}) #{phone_number[3...6]}-#{phone_number[6...10]}"
    end
  end
end
