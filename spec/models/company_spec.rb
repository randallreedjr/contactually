require 'rails_helper'

RSpec.describe Company, type: :model do
  let(:company) { FactoryGirl.create(:company) }

  it 'has a valid factory' do
    expect(company).to be_valid
  end

  describe 'associations' do
    it 'has many contacts' do
      expect(company).to have_many :contacts
    end
  end

  describe 'validations' do
    it 'requires a unique name' do
      expect(company).to validate_uniqueness_of :name
    end

    it 'requires a name to be present' do
      expect(company).to validate_presence_of :name
    end
  end
end
