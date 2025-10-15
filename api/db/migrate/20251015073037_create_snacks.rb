class CreateSnacks < ActiveRecord::Migration[8.0]
  def change
    create_table :snacks do |t|
      t.references :user, null: false, foreign_key: false
      t.string :name, limit: 100, null: false
      t.string :icon, limit: 100, null: true
      t.text :description, null: false
      t.timestamps
    end

    add_index :snacks, :name
  end
end
