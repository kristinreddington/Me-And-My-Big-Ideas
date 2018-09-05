class Image < ApplicationRecord
  belongs_to :idea
  validates_presence_of :url 
end
