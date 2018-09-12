class Idea < ApplicationRecord
  validates :title, :presence => true
  validates :description, :presence => true

  has_many :images, :dependent => :destroy

  accepts_nested_attributes_for :images, :allow_destroy => true

  def as_json(_opts = {})
    {
      id: id,
      title: title,
      description: description,
      errors: errors,
      images: images.map do |x|
        {
          :url => x.photo,
          :name => x.photo_file_name,
          :id => x.id
        }
      end
    }
  end
end
