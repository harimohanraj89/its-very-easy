class RecipeStep < ApplicationRecord
  include Fae::BaseModelConcern

  belongs_to :recipe, touch: true

  def fae_nested_parent
    :recipe
  end

  acts_as_list add_new_at: :top
  default_scope { order(:position) }

  has_fae_image :preview_image

  def fae_display_field
    
  end

  belongs_to :recipe
end
