class Animal < ApplicationRecord
  has_many :animal_states
  has_many :states, through: :animal_states
end
