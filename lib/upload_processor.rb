require 'csv'

class UploadProcessor
  attr_reader :file_upload
  def initialize(file_upload)
    @file_upload = file_upload
  end

  def create_contacts
    CSV.parse(file_upload.file_contents, headers: :first_row) do |row|
      attributes = extract_attributes(row)
      company = create_company(attributes.delete(:company_name))
      attributes.merge!(company_id: company.id)
      attributes.merge!(normalize_phone_number(attributes[:phone_number]))
      create_contact(attributes)
    end
  end

  def extract_attributes(row)
    row.to_h.each_with_object({}) do |column,hsh|
      key = symbolize_header(column[0])
      hsh[key] = column[1]
    end
  end

  def symbolize_header(str)
    str.downcase.split.join('_').to_sym
  end

  def create_company(company_name)
    Company.create(name: company_name)
  end

  def create_contact(attributes)
    contact = Contact.new
    contact.assign_attributes(attributes)
    contact.save!
  end

  def normalize_phone_number(str)
    phone_number, extension = str.split(' x')
    phone_number = phone_number.delete('()-.')[-10..-1]

    {
      phone_number: phone_number,
      extension: extension
    }
  end
end
