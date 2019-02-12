import React from "react"
import PropTypes from "prop-types"
import Grid from '@material-ui/core/Grid';

const Recipe = ({recipe}) => {
  return (
    <div className="recipe">
      <Grid container>
        <Grid xs={12}>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <hr />
        </Grid>

        <Grid xs={6}>
          <h2>Ingredients</h2>
          <ul>
            {
              recipe.recipe_ingredients.map((ingredient) => {
                return <li>{ingredient.name}</li>
              })
            }
          </ul>
        </Grid>

        <Grid xs={6}>
          <h2>Steps</h2>
          <ul>
            {
              recipe.recipe_steps.map((step) => {
                return <li>{step.step}</li>
              })
            }
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}

export default Recipe
