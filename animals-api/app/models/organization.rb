class Organization < ApplicationRecord
  has_many :states
  has_many :animals, through: :states
  has_many :backings
  has_many :users, through: :backings
end
