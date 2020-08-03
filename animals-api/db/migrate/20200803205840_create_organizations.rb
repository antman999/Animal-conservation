class CreateOrganizations < ActiveRecord::Migration[6.0]
  def change
    create_table :organizations do |t|
      t.string :name
      t.string :mission
      t.integer :since
      t.string :rating
      t.timestamps
    end
  end
end
