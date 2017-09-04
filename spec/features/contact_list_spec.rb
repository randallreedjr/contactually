require 'rails_helper'

RSpec.describe 'contact list', type: :feature, js: true do
  context 'when there are no contacts' do
    it 'displays no contact message' do
      visit '/contacts'

      expect(page.body).to have_content('You have no contacts. Add a contact or upload a contact file.')
    end
  end

  context 'when there are contacts' do
    let!(:contact) { FactoryGirl.create(:contact) }
    it "displays the contact's first name" do
      visit '/contacts'

      expect(page.body).to have_content(contact.first_name)
    end

    it "displays the contact's last name" do
      visit '/contacts'

      expect(page.body).to have_content(contact.last_name)
    end

    it "displays the contact's email address" do
      visit '/contacts'

      expect(page.body).to have_content(contact.email_address)
    end

    xit "displays the contact's phone number" do
      visit '/contacts'

      # TODO: Figure out how to test for formatted phone number
      # expect(page.body).to have_content(contact.phone_number)
    end

    it "displays the contact's extension" do
      visit '/contacts'

      expect(page.body).to have_content(contact.extension)
    end
  end

  describe 'filtering contacts' do
    let!(:contact) { FactoryGirl.create(:contact, email_address: 'test@example.com') }
    let!(:other_contact) { FactoryGirl.create(:contact, email_address: 'other@mail.org') }

    context 'when a contact matches the filter' do
      it 'displays the matching contact' do
        visit '/contacts'
        fill_in 'Filter by email:', with: '.com'

        expect(page.body).to have_content(contact.email_address)
      end

      it 'hides the non-matching contact' do
        visit '/contacts'
        fill_in 'Filter by email:', with: '.com'

        expect(page.body).to_not have_content(other_contact.email_address)
      end
    end
  end

  describe 'sorting contacts' do
    let!(:contact) { FactoryGirl.create(:contact, last_name: 'Smith', email_address: 'asmith@example.com') }
    let!(:other_contact) { FactoryGirl.create(:contact, last_name: 'Adams', email_address: 'jadams@mail.org') }

    context 'by name' do
      it 'sorts contacts by name asc on one click' do
        visit '/contacts'
        find('th', text: 'Name').click

        expect(page.first('td.name').text).to match('Adams')
      end

      it 'sorts contacts by name desc on two clicks' do
        visit '/contacts'
        find('th', text: 'Name').click
        find('th', text: 'Name').click

        expect(page.first('td.name').text).to match('Smith')
      end
    end

    context 'by email' do
      it 'sorts contacts by email asc on one click' do
        visit '/contacts'
        find('th', text: 'Email Address').click

        expect(page.first('td.email').text).to match('asmith@example.com')
      end

      it 'sorts contacts by email desc on two clicks' do
        visit '/contacts'
        find('th', text: 'Email Address').click
        find('th', text: 'Email Address').click

        expect(page.first('td.email').text).to match('jadams@mail.org')
      end
    end
  end
end
