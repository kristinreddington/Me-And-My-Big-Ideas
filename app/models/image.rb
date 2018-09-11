class Image < ApplicationRecord
  belongs_to :idea
  # validates_presence_of :url
  has_attached_file :photo 
  has_attached_file \
    :photo,
    styles: { thumb: ['32x32#', 'jpg'] },
    convert_options: {
      all: '-interlace Plane'
    },
    default_url: '/images/default_:style_photo.png'

end
