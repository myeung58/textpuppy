User.delete_all

user = User.create(username: "test", password: "test", email: "test@test.com", name: "test name")
user.contacts << Contact.create(contact_name: "Mike", phone: "2269805481")