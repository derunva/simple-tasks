class List < ApplicationRecord
  validates :name, presence: true
  validates_length_of :name, minimum: 5
  has_many :tasks, dependent: :destroy
end
