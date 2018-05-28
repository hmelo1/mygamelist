class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :title
      t.string :platforms
      t.string :description
      t.integer :release_year
      t.string :genre

      t.timestamps
    end
  end
end
