import React from "react"
import PropTypes from "prop-types"

const Recipes = ({recipes}) => {
  return (
    <ul>
      {recipes.map(recipe => (
        <li key={recipe.title}>
          <strong>{recipe.title}</strong>: {recipe.description}
        </li>
      ))}
    </ul>
  );
}

Recipes.propTypes = {
  recipes: PropTypes.array
}

export default Recipes
