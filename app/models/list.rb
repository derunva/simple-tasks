class List < ApplicationRecord
  validates :name, presence: true
  validates_length_of :name, minimum: 5
end
