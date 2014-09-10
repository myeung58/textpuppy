get '/' do
  # if signed_in?
  # 	redirect "/users/#{current_user.id}"
  # else
    erb :index
  # end
end
