class Idea < ApplicationRecord
  has_many :images, :dependent => :destroy
  has_many :notes, :dependent => :destroy
  validates_presence_of :title
  validates_presence_of :description
  accepts_nested_attributes_for :images, :notes

  def as_json(_opts = {})
    {
      id: id,
      title: title,
      description: description,
      errors: errors,
      images: images.map { |x| { url: x.url, id: x.id }},
      notes: notes.map { |x| {:text => x.text, :id => x.id }}
    }
  end

end
