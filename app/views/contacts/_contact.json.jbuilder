json.extract! contact, :id, :first_name, :last_name, :email_address, :phone_number, :extension, :company_id, :created_at, :updated_at
json.url contact_url(contact, format: :json)
json.show_url contact_path(contact, format: :html)
json.edit_url edit_contact_path(contact, format: :html)
json.company_name contact.company_name
