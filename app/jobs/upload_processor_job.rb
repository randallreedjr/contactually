require 'upload_processor'

class UploadProcessorJob < ActiveJob::Base
  queue_as :default

  def perform(file_upload_id)
    file_upload = FileUpload.find(file_upload_id)

    processor = UploadProcessor.new(file_upload)
    processor.create_contacts
  end
end
