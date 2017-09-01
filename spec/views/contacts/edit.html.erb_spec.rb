require 'rails_helper'

RSpec.describe "contacts/edit", type: :view do
  before(:each) do
    @contact = assign(:contact, Contact.create!(
      :first_name => "MyString",
      :last_name => "MyString",
      :email_address => "MyString",
      :phone_number => "MyString",
      :extension => "MyString",
      :company => nil
    ))
  end

  it "renders the edit contact form" do
    render

    assert_select "form[action=?][method=?]", contact_path(@contact), "post" do

      assert_select "input#contact_first_name[name=?]", "contact[first_name]"

      assert_select "input#contact_last_name[name=?]", "contact[last_name]"

      assert_select "input#contact_email_address[name=?]", "contact[email_address]"

      assert_select "input#contact_phone_number[name=?]", "contact[phone_number]"

      assert_select "input#contact_extension[name=?]", "contact[extension]"

      assert_select "input#contact_company_attributes_name[name=?]", "contact[company_attributes][name]"
    end
  end
end
