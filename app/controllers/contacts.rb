get '/users/:id/contacts/new' do
  @user = User.find(params[:id])
  erb :new_contact, layout: false
end

post '/users/:id/contacts/new' do
  @user = User.find(params[:id])
  @user.contacts << Contact.create(contact_name: params[:contact_name], phone: params[:phone])
  redirect "/users/#{current_user.id}"
end

