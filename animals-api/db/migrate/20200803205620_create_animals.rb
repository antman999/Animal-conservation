class CreateAnimals < ActiveRecord::Migration[6.0]
  def change
    create_table :animals do |t|
      t.string :species
      t.string :name
      t.integer :count
      t.string :habitat
      t.string :img
      t.boolean :critical
      t.boolean :rise
      t.timestamps
      t.string :description 
      t.string :threats
    end
  end
end
