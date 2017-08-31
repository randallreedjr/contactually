json.extract! contact, :id, :first_name, :last_name, :email, :phone, :extension, :company_id, :created_at, :updated_at
json.url contact_url(contact, format: :json)
json.company_name contact.company_name
