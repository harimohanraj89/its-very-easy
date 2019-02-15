class RecipePresenter
  attr_reader :recipe

  def initialize(recipe)
    @recipe = recipe
  end

  def props
    {
      recipe: {
        **recipe_attributes,
        recipe_ingredients: recipe_ingredients_attributes,
        recipe_steps: recipe_steps_ingredients,
      }
    }
  end

  def recipe_attributes
    recipe.attributes.deep_symbolize_keys
  end

  def recipe_ingredients_attributes
    recipe.recipe_ingredients.map(&:attributes).map(&:deep_symbolize_keys)
  end

  def recipe_steps_ingredients
    recipe.recipe_steps.map(&:attributes).map(&:deep_symbolize_keys)
  end
end
