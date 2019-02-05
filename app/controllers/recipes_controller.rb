class RecipesController < ApplicationController
  if protected_launch?
    http_basic_authenticate_with name: ENV["BASIC_AUTH_USERNAME"], password: ENV["BASIC_AUTH_PASSWORD"]
  end

  def show
    @recipe = Recipe.find_by(slug: params[:id])
    @recipe_data = {
      recipe: {
        **@recipe.attributes.deep_symbolize_keys,
        recipe_ingredients: @recipe.recipe_ingredients.map(&:attributes).map(&:deep_symbolize_keys),
        recipe_steps: @recipe.recipe_steps.map(&:attributes),
      }
    }
  end
end


{
  recipe: {
    title: "Potato masal",
    description: "tasty yellow potato stuff",
    recipe_ingredients: [
      {
        name: "Onion"
      },
      {
        name: "kadugu"
      }
    ],
    recipe_steps: [
      {
        step: "Fry stuff"
      },
      {
        step: "And add salt"
      }
    ]
  }
}
