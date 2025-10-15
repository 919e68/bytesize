class CreateFlavors < ActiveRecord::Migration[8.0]
  def change
    create_table :flavors do |t|
      t.string :name, limit: 50, null: false
      t.string :icon, limit: 100, null: true
      t.text :description, null: true
      t.timestamps
    end

    add_index :flavors, :name, unique: true
  end
end
