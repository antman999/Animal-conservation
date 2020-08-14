class State < ApplicationRecord
  has_many :animalstates
  has_many :animals, through: :animalstates
 
end
