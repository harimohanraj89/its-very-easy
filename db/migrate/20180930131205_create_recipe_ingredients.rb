class CreateRecipeIngredients < ActiveRecord::Migration[5.1]
  def change
    create_table :recipe_ingredients do |t|
      t.string :name
      t.integer :position

      t.timestamps
    end
  end
end
