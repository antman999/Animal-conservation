class User < ApplicationRecord
    has_many :sightings
  has_many :animals, through: :sightings
  has_many :backings
  has_many :organizations, through: :backings
end
