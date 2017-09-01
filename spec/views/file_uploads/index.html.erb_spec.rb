require 'rails_helper'

RSpec.describe "file_uploads/index", type: :view do
  before(:each) do
    assign(:file_uploads, [
      FileUpload.create!(
        :filename => "Filename",
        :content_type => "text/csv",
        :file_contents => ""
      ),
      FileUpload.create!(
        :filename => "Filename",
        :content_type => "text/csv",
        :file_contents => ""
      )
    ])
  end

  it "renders a list of file_uploads" do
    render
    assert_select "tr>td", :text => "Filename", :count => 2
    assert_select "tr>td", :text => "text/csv", :count => 2
  end
end
