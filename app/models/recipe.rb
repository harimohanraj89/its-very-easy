class Recipe < ApplicationRecord
  include Fae::BaseModelConcern

  acts_as_list add_new_at: :top
  default_scope { order(:position) }

  has_many :recipe_ingredients

  has_fae_image :hero_image

  def fae_display_field
    title
  end

end
