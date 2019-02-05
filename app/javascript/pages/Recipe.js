import React from "react"
import PropTypes from "prop-types"

const Recipe = ({recipe}) => {
  return (
    <div className="recipe">
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <hr />

      <h2>Ingredients</h2>
      <ul>
        {
          recipe.recipe_ingredients.map((ingredient) => {
            return <li>{ingredient.name}</li>
          })
        }
      </ul>

      <hr />

      <h2>Steps</h2>
      <ul>
        {
          recipe.recipe_steps.map((step) => {
            return <li>{step.step}</li>
          })
        }
      </ul>

      <hr />
    </div>
  );
}

export default Recipe
