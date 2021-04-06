class Category < ApplicationRecord
  has_and_belongs_to_many :jokes

  validates :name, presence: true
end
