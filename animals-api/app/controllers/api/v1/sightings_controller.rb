class Api::V1::SightingsController < ApplicationController
  def create
    sighting = Sighting.new(animal_id: params[:animal_id],
  user_id: params[:user_id],
  lat: params[:lat],
  lng: params[:lng])
  if sighting.save
   render json: sighting
  else
    render json:{errors:sighting.errors.full_messages}
  end
end
end
