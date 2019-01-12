module API
  class RecipesController < ActionController::API
    def index
      render json: Recipe.all.to_json
    end
  end
end
