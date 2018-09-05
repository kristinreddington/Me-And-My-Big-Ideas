class Note < ApplicationRecord
  belongs_to :idea
  validates_presence_of :text
end
