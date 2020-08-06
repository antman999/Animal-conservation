class Api::V1::StatesController < ApplicationController
  def index
    states =  State.all
        render json: states, include:[:animalstates,:stateorganizations,:animals]
  end
end
  