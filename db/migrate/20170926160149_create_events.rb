class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.string :body
      t.integer :author_id, null: false
      t.integer :project_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      
      t.timestamps
    end
  end
end
