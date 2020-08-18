class Api::V1::OrganizationsController < ApplicationController
  def index
      organization = Organization.all
    render json: organization, include:[:animals]
  end
end
