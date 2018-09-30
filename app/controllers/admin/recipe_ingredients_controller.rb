module Admin
  class RecipeIngredientsController < Fae::NestedBaseController

    private

    def build_assets
      @item.build_preview_image if @item.preview_image.blank?
    end

  end
end
