class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.text :text
      t.integer :idea_id
      t.index ["idea_id"], name: "index_notes_on_idea_id"
      t.timestamps
    end
  end
end
