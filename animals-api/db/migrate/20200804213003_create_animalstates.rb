class CreateAnimalstates < ActiveRecord::Migration[6.0]
  def change
    create_table :animalstates do |t|
      t.integer :animal_id
      t.integer :state_id
      t.timestamps
    end
  end
end
