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
end
