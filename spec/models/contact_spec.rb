require 'rails_helper'

RSpec.describe Contact, type: :model do
  let(:contact) { FactoryGirl.create(:contact) }

  it 'has a valid factory' do
    expect(contact).to be_valid
  end

  describe 'associations' do
    it 'belongs to a company' do
      expect(contact).to belong_to :company
    end

    it 'accepts_nested_attributes_for a company' do
      expect(contact).to accept_nested_attributes_for :company
    end
  end

  describe 'validations' do
    it 'requires a first name to be present' do
      expect(contact).to validate_presence_of :first_name
    end
  end
end
