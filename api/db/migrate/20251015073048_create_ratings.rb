class CreateRatings < ActiveRecord::Migration[8.0]
  def change
    create_table :ratings do |t|
      t.references :user, null: false, foreign_key: false
      t.references :snack, null: false, foreign_key: false
      t.integer :rate, limit: 2, null: false
      t.text :comment, null: true
      t.timestamps
    end
  end
end
