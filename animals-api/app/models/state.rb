class State < ApplicationRecord
  has_many :animalstates
  has_many :animals, through: :animalstates
  has_many :stateorganizations
  has_many :organizations, through: :stateorganizations
end
