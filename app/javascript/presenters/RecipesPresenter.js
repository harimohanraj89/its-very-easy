import React from "react"
import PropTypes from "prop-types"

import Recipe from "./RecipePresenter"

const Recipes = ({recipes}) => {
  return (
    <div className="recipes">
      {recipes.map(recipe => <Recipe key={recipe.slug} recipe={recipe} /> )}
    </div>
  );
}

Recipes.propTypes = {
  recipes: PropTypes.array
}

export default Recipes
