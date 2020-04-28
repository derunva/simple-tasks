class Task < ApplicationRecord
  after_initialize :set_defaults, unless: :persisted?

  validates :name, presence: true
  validates_length_of :name, minimum: 5
  belongs_to :list

  def set_defaults
    self.status = false if self.status.nil?
  end
end
