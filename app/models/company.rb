class Company < ActiveRecord::Base
  has_many :contacts, inverse_of: :company

  validates :name, uniqueness: true, presence: true
end
