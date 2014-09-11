class User < ActiveRecord::Base
  # Remember to create a migration!
  validates_presence_of :username, :password
  has_many :contacts
end
