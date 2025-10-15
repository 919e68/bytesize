class CreateUsers < ActiveRecord::Migration[8.0]
  def change
    create_table :users do |t|
      t.string :username, limit: 100, null: false
      t.string :name, limit: 100, null: false
      t.string :password_digest, limit: 100, null: false
      t.timestamps
    end

    add_index :users, :username, unique: true
  end
end
