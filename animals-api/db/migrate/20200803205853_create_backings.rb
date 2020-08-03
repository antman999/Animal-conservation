class CreateBackings < ActiveRecord::Migration[6.0]
  def change
    create_table :backings do |t|
      t.integer :user_id
      t.integer :organization_id
      t.string :comments
      t.timestamps
    end
  end
end
