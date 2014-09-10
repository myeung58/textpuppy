class User < ActiveRecord::Base
  # Remember to create a migration!
  validates_presence_of :username, :password
end
