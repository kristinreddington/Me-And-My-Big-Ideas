class Idea < ApplicationRecord
  has_many :images, :dependent => :destroy
  has_many :notes, :dependent => :destroy
  validates :title, :presence => true
  validates :description, :presence => true
  accepts_nested_attributes_for :images, :allow_destroy => true
  accepts_nested_attributes_for :notes, :allow_destroy => true

  def as_json(_opts = {})
    {
      id: id,
      title: title,
      description: description,
      errors: errors,
      images: images.map { |x| { :url => x.photo.url.absolute_url,
                                 :name => x.photo_file_name,
                                 :id => x.id }},

      notes: notes.map { |x| {:text => x.text,
                              :id => x.id }}
    }
  end

end
