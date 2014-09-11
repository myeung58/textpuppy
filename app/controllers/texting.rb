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

    p ENV['account_sid']
    @client = Twilio::REST::Client.new(ENV['account_sid'], ENV['auth_token'])
   
    @client.account.messages.create({
    :from => '+12262420765', 
    :to => contact.phone, 
    :body => "hey what's up",  
    })
  end
  
  redirect "/users/#{current_user.id}"
end



# use set timeout to append and remove notifications

