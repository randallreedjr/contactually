class RenameEmailAndPhoneInContacts < ActiveRecord::Migration
  def change
    rename_column :contacts, :phone, :phone_number
    rename_column :contacts, :email, :email_address
  end
end
