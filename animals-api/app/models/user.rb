class User < ApplicationRecord
    has_many :sightings
  has_many :animals, through: :sightings
  has_many :backings
  has_many :organizations, through: :backings
  has_secure_password
  validates :username, uniqueness: true
end
