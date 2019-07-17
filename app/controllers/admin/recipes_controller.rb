module Admin
  class RecipesController < Fae::BaseController
    def create
      puts params[:recipe].inspect
      super
    end
    private

    def build_assets
      @item.build_hero_image if @item.hero_image.blank?
    end
  end
end
