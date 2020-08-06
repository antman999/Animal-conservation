class Animalstate < ApplicationRecord
  belongs_to :state
  belongs_to :animal
end
