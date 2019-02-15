require "rails_helper"

RSpec.describe RecipePresenter do
  let(:recipe) do
    Recipe.new(
      title: 'Recipe',
      slug: 'recipe',
      description: 'Recipe description'
    )
  end

  let(:recipe_ingredients) do
    [
      RecipeIngredient.new(name: 'Ingredient')
    ]
  end

  let(:recipe_steps) do
    [
      RecipeStep.new(step: 'Do something')
    ]
  end

  before do
    allow(recipe).to receive(:recipe_ingredients).and_return(recipe_ingredients)
    allow(recipe).to receive(:recipe_steps).and_return(recipe_steps)
  end

  subject(:recipe_presenter) { described_class.new(recipe) }

  describe '#props' do
    it 'includes recipe info' do
      expect(recipe_presenter.props[:recipe]).to include(
        title: 'Recipe',
        slug: 'recipe',
        description: 'Recipe description'
      )
    end

    it 'includes recipe ingredient info' do
      expect(recipe_presenter.props[:recipe][:recipe_ingredients][0]).to include(
        name: 'Ingredient'
      )
    end

    it 'includes recipe step info' do
      expect(recipe_presenter.props[:recipe][:recipe_steps][0]).to include(
        step: 'Do something'
      )
    end
  end
end
