post '/signup' do
  @user = User.create(params)
  session[:user_id] = @user.id
  redirect "/users/#{@user.id}"
end

post '/signin' do
  @user = User.find_by(username: params[:username])
  if @user
  	session[:user_id] = @user.id
  	redirect "/users/#{@user.id}"
  else
  	redirect '/'
  end
end

get '/signout' do
  session[:user_id] = nil
  redirect '/'
end

get '/users/:id' do
  @user = User.find(params[:id])
  erb :user_dashboard
end


