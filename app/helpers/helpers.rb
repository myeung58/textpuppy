helpers do
  def current_user 
  	@current_user ||= User.find(session[:user_id])
  end

  def signed_in?
  	!current_user.signed_in?
  end

end