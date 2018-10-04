class CreateRecipeSteps < ActiveRecord::Migration[5.1]
  def change
    create_table :recipe_steps do |t|
      t.text :step
      t.integer :position
      t.references :recipe, foreign_key: true

      t.timestamps
    end
  end
end
