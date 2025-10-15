class CreateSessions < ActiveRecord::Migration[8.0]
  def change
    create_table :sessions do |t|
      t.references :user, null: false, foreign_key: false
      t.bigint :sid, unsigned: true, null: false
      t.text :access_token, null: false
      t.datetime :expires_at
      t.timestamps
    end

    add_index :sessions, :sid, unique: true
  end
end
