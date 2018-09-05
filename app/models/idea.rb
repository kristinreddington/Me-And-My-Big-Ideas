class Idea < ApplicationRecord
  has_many :images
  has_many :notes
  validates_presence_of :title
  validates_presence_of :description 
end
