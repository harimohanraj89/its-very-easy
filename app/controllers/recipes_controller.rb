class RecipesController < ApplicationController
  def show
    @recipe = Recipe.find_by(slug: params[:id])
  end
end
