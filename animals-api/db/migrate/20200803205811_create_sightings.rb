class CreateSightings < ActiveRecord::Migration[6.0]
  def change
    create_table :sightings do |t|
      t.integer :animal_id
      t.integer :user_id
      t.string :state
      t.string :city
      t.integer :zipcode
      t.string :address
      t.string :comment
      t.decimal :lat, precision: 10, scale: 6
    t.decimal :lng, precision: 10, scale: 6
      t.timestamps
    end
  end
end
