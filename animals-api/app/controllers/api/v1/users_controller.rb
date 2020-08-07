class Api::V1::UsersController < ApplicationController

  def create
  user = User.new(username: params[:username],
  password: params[:password],
  first: params[:first],
  last: params[:last],
  state: params[:state],
  bio: params[:bio]

  )
  if user.save
   render json: user
  else
    render json:{errors:user.errors.full_messages}
  end
  end

  def login
   user=User.find_by(username:params[:username])
   if user && user.authenticate(params[:password])
     render json: user
   else
    render json: {errors:'Another snag one of them is wrong :( '}
   end
  end

  def auto_login
    user = User.find_by(id:request.headers["Authorization"])
    render json: user
  end
  
end
