class CreateTags < ActiveRecord::Migration[5.1]
  def change
    create_table :tags do |t|
      t.string :name, null: false, unqiue: true

      t.timestamps
    end
    add_index :tags, :name
  end

end
