class Animal < ApplicationRecord
  has_many :animalstates
  has_many :states, through: :animalstates
    has_many :sightings
  has_many :users, through: :sightings
end
