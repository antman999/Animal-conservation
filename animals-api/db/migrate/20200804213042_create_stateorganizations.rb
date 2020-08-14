class CreateStateorganizations < ActiveRecord::Migration[6.0]
  def change
    create_table :stateorganizations do |t|
            t.integer :organization_id
            t.integer :animal_id
      t.timestamps
    end
  end
end
