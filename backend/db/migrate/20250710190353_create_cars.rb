class CreateCars < ActiveRecord::Migration[8.0]
  def change
    create_table :cars do |t|
      t.string :brand
      t.string :model
      t.integer :year
      t.string :color
      t.integer :mileage
      t.decimal :price
      t.text :images

      t.timestamps
    end
  end
end
