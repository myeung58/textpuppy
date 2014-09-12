User.delete_all

user = User.create(username: "myeung58", password: "123", email: "test@test.com", name: "test name", phone: "2262420765")
user.contacts << Contact.create(contact_name: "Nick", phone: "9167981133")
user.contacts << Contact.create(contact_name: "Ryan", phone: "4103020865")