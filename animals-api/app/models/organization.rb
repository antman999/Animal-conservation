class Organization < ApplicationRecord
  has_many :stateorganizations
  has_many :states, through: :stateorganizations
  has_many :backings
  has_many :users, through: :backings
end
