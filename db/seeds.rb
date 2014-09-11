User.delete_all

user = User.create(username: "test", password: "test", email: "test@test.com", name: "test name", phone: "2262420765")
user.contacts << Contact.create(contact_name: "Michael", phone: "2269805481")