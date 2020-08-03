class CreateStates < ActiveRecord::Migration[6.0]
  def change
    create_table :states do |t|
      t.integer :animal_id
      t.integer :organization_id
      t.string :state
      t.string :short
      t.timestamps
    end
  end
end
