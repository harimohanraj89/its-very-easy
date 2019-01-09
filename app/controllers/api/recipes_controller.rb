module API
  class RecipesController < ActionController::API
    respond_to :json

    def index
      respond_with Recipe.all
    end
  end
end
