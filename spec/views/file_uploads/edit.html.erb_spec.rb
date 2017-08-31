require 'rails_helper'

RSpec.describe "file_uploads/edit", type: :view do
  before(:each) do
    @file_upload = assign(:file_upload, FileUpload.create!(
      :filename => "MyString",
      :content_type => "MyString",
      :file_contents => ""
    ))
  end

  xit "renders the edit file_upload form" do
    render

    assert_select "form[action=?][method=?]", file_upload_path(@file_upload), "post" do

      assert_select "input#file_upload_filename[name=?]", "file_upload[filename]"

      assert_select "input#file_upload_content_type[name=?]", "file_upload[content_type]"

      assert_select "input#file_upload_file_contents[name=?]", "file_upload[file_contents]"
    end
  end
end
