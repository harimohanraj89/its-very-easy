class AddRecipeIdToRecipeIngredients < ActiveRecord::Migration[5.1]
  def change
    add_reference :recipe_ingredients, :recipe, foreign_key: true
  end
end
