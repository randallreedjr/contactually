class Contact < ActiveRecord::Base
  belongs_to :company, inverse_of: :contacts
  accepts_nested_attributes_for :company

  validates :first_name, presence: true
end
