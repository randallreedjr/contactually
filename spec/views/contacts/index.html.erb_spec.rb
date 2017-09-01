require 'rails_helper'

RSpec.describe "contacts/index", type: :view do
  before(:each) do
    assign(:contacts, [
      Contact.create!(
        :first_name => "First Name",
        :last_name => "Last Name",
        :email_address => "Email",
        :phone_number => "Phone",
        :extension => "Extension",
        :company => nil
      ),
      Contact.create!(
        :first_name => "First Name",
        :last_name => "Last Name",
        :email_address => "Email",
        :phone_number => "Phone",
        :extension => "Extension",
        :company => nil
      )
    ])
  end

  xit "renders a list of contacts" do
    render
    assert_select "tr>td", :text => "First Name".to_s, :count => 2
    assert_select "tr>td", :text => "Last Name".to_s, :count => 2
    assert_select "tr>td", :text => "Email".to_s, :count => 2
    assert_select "tr>td", :text => "Phone".to_s, :count => 2
    assert_select "tr>td", :text => "Extension".to_s, :count => 2
    assert_select "tr>td", :text => nil.to_s, :count => 2
  end
end
