class Animal < ApplicationRecord
  has_many :states
  has_many :organizations, through: :states
end
