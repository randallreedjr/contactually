require 'rails_helper'

RSpec.describe "file_uploads/new", type: :view do
  before(:each) do
    assign(:file_upload, FileUpload.new(
      :filename => "MyString",
      :content_type => "MyString",
      :file_contents => ""
    ))
  end

  xit "renders new file_upload form" do
    render

    assert_select "form[action=?][method=?]", file_uploads_path, "post" do

      assert_select "input#file_upload_filename[name=?]", "file_upload[filename]"

      assert_select "input#file_upload_content_type[name=?]", "file_upload[content_type]"

      assert_select "input#file_upload_file_contents[name=?]", "file_upload[file_contents]"
    end
  end
end
