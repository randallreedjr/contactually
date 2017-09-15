require 'spec_helper'
require_relative '../../lib/utility/phone_utilities'

RSpec.describe 'phone_utilities' do
  describe '#strip_phone_number' do
    context 'when phone number is formatted' do
      context 'with parentheses' do
        let(:phone_number) { '(804) 523-1796' }
        it 'strips the phone number' do
          expect(Utility::PhoneUtilities.strip_phone_number(phone_number)).to eq '8045231796'
        end
      end

      context 'with a leading 1' do
        let(:phone_number) { '1-519-742-8036' }
        it 'strips the phone number' do
          expect(Utility::PhoneUtilities.strip_phone_number(phone_number)).to eq '5197428036'
        end
      end
    end

    context 'when phone number is unformatted' do
      let(:phone_number) { '4235987601' }
      it 'returns the same phone number' do
        expect(Utility::PhoneUtilities.strip_phone_number(phone_number)).to eq '4235987601'
      end
    end
  end

  describe '#format_phone_number' do
    context 'when phone number is formatted' do
      context 'with parentheses' do
        let(:phone_number) { '(804) 523-1796' }
        it 'formats the phone number' do
          expect(Utility::PhoneUtilities.format_phone_number(phone_number)).to eq '(804) 523-1796'
        end
      end

      context 'with a leading 1' do
        let(:phone_number) { '1-519-742-8036' }
        it 'formats the phone number with parentheses' do
          expect(Utility::PhoneUtilities.format_phone_number(phone_number)).to eq '(519) 742-8036'
        end
      end
    end

    context 'when phone number is unformatted' do
      let(:phone_number) { '4235987601' }
      it 'formats the phone number with parentheses' do
        expect(Utility::PhoneUtilities.format_phone_number(phone_number)).to eq '(423) 598-7601'
      end
    end
  end
end
