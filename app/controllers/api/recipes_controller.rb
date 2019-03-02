module API
  class RecipesController < ActionController::API
    def index
      recipes = Recipe.all
      recipes_presenter = RecipesPresenter.new(recipes)

      render json: recipes_presenter.props
    end

    def show
      recipe = Recipe.find_by(slug: params[:id])
      recipe_presenter = RecipePresenter.new(recipe)

      render json: recipe_presenter.props
    end
  end
end
