class Api::V1::BackingsController < ApplicationController

 def create
  backing = Backing.new(user_id: params[:user_id],
  organization_id: params[:organization_id],
 
  )
  if backing.save
   render json: backing, include:[:user,:organization]
  else
    render json:{errors:backing.errors.full_messages}
  end
  end


end
