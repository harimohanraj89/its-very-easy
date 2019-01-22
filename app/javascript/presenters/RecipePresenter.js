import React from "react"
import PropTypes from "prop-types"

const Recipe = ({recipe}) => {
  return (
    <div className="recipe">
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
    </div>
  );
}

Recipe.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default Recipe
