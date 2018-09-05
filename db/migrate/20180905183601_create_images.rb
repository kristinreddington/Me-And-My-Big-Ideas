class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :url
      t.integer :idea_id 
      t.index ["idea_id"], name: "index_images_on_idea_id"
      t.timestamps
    end
  end
end
