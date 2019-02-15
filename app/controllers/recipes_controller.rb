class RecipesController < ApplicationController
  if protected_launch?
    http_basic_authenticate_with name: ENV["BASIC_AUTH_USERNAME"], password: ENV["BASIC_AUTH_PASSWORD"]
  end

  def show
    recipe = Recipe.find_by(slug: params[:id])
    @recipe_presenter = RecipePresenter.new(recipe)
  end
end
