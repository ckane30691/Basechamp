class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :project_id, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
  end
end
