class Contact < ActiveRecord::Base
  belongs_to :company, inverse_of: :contacts
  accepts_nested_attributes_for :company, reject_if: proc { |attributes| attributes['name'].blank? || Company.find_by(name: attributes['name']).present? }

  validates :first_name, presence: true
end
