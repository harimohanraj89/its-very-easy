class RecipesPresenter
  attr_reader :recipes

  def initialize(recipes)
    @recipes = recipes
  end

  def props
    {
      recipes: recipes.map do |recipe|
        RecipePresenter.new(recipe).recipe_attributes
      end
    }
  end
end
