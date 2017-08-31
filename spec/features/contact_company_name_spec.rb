require 'rails_helper'

RSpec.describe 'contact page', type: :feature do
  describe 'index', js: true do
    context 'when contact has a company' do
      let!(:contact) { FactoryGirl.create(:contact, :with_company) }

      it 'displays the company name' do
        visit '/contacts'

        expect(page.find('td.company-name').text).to eq contact.company.name
      end
    end

    context 'when contact has no company' do
      let!(:contact) {FactoryGirl.create(:contact) }

      it 'displays no company name' do
        visit '/contacts'

        expect(page.find('td.company-name').text).to eq ''
      end
    end
  end

  describe 'show' do
    context 'when contact has a company' do
      let!(:contact) { FactoryGirl.create(:contact, :with_company) }

      it 'displays the company name' do
        visit "/contacts/#{contact.id}"

        expect(page.find('p.company-name').text).to eq "Company: #{contact.company.name}"
      end
    end

    context 'when contact has no company' do
      let!(:contact) { FactoryGirl.create(:contact) }

      it 'displays the company name' do
        visit "/contacts/#{contact.id}"

        expect(page.find('p.company-name').text).to eq "Company: None"
      end
    end
  end
end
