class CreateGamelists < ActiveRecord::Migration[5.2]
  def change
    create_table :gamelists do |t|
      t.references :game, foreign_key: true
      t.references :user, foreign_key: true
      t.string :progress
      t.datetime :start_date
      t.datetime :end_date
      t.integer :days
      t.integer :personal_rating

      t.timestamps
    end
  end
end
