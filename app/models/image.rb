class Image < ApplicationRecord
  belongs_to :idea
  validates_presence_of :url
  has_attached_file :url 
end
