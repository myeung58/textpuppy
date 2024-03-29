Dotenv.load

# text a person
get '/users/:id/contacts/text' do
  @user = User.find(params[:id])
  erb :contact_to_text, layout: false
end

post '/users/:id/contacts/text' do
  # @user = User.find(params[:id])
  # an array of contact names
  @contact_names = params[:contacts].split(",")
  @contacts = []
  @contact_names.each do |contact_name|
    contact = Contact.find_by(contact_name: contact_name)
    @contacts << contact if !contact.nil?
  end
  @contacts.each do |contact|
    # take the checked contact(s) and send a text
    # @client = Twilio::REST::Client.new(ENV['account_sid'], ENV['auth_token'])
    @client = Twilio::REST::Client.new('AC90434a67ef1e41b8c69308b4d0ae7098', '1242572856dbaca3a0faf7418f8cd902')
    
    @client.account.messages.create({
    :from => '+14154668666', 
    :to => contact.phone, 
    :body => params[:content]  
    })
  end
  
  redirect "/users/#{current_user.id}"
end







