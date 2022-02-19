import React from "react"
import PropTypes from "prop-types"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Recipe = ({recipe}) => {
  return (
    <div className={`recipe recipe-${(recipe.position - 1) % 6 + 1}`}>
      <Grid container spacing={0} className="recipe_container">
        <Grid xs={12} item>
          <h1 className="recipe_title">
            {recipe.title}
          </h1>

          <p className="recipe_description">
            {recipe.description}
          </p>
        </Grid>
      </Grid>

      <Grid container className="recipe_section">
        <Grid xs={12} md={6} item  >
          <Card className="recipe_ingredients">
            <CardContent>
              <h1 className="recipe_heading">
                Ingredients
              </h1>
              <ul>
                {
                  recipe.recipe_ingredients.map((ingredient) => {
                    return (
                      <li>
                        {ingredient.name}
                      </li>
                    )
                  })
                }
              </ul>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12} md={6} item>
          <Card className = "recipe_steps">
            <CardContent>
              <h1 className="recipe_heading">
                Steps
              </h1>
              <ul>
                {
                  recipe.recipe_steps.map((step) => {
                    return (
                      <li>
                        {step.step}
                      </li>
                    )
                  })
                }
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Recipe
