helpers do 
  def format_phone_num(phone_num)
  	"(#{phone_num[0..2]}) - #{phone_num[3..5]} - #{phone_num[6..9]}"
  end
end