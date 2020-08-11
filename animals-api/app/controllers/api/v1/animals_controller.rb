class Api::V1::AnimalsController < ApplicationController
  def index
    animals = Animal.all
    render json: animals
  end
  def show 
    animal = Animal.find_by(id:params[:id])
    render json: animal, include:[:sightings,:states]
  end
end
