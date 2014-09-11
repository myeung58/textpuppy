class CreateContacts < ActiveRecord::Migration
  def change
  	create_table :contacts do |t|
  	  t.belongs_to :user
  	  t.string :contact_name
  	  t.string :phone

  	  t.timestamps
  	end
  end
end
