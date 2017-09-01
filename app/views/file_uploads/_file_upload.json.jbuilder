json.extract! file_upload, :id, :filename, :content_type, :file_contents, :created_at, :updated_at
json.url file_upload_url(file_upload, format: :json)