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
    <div className="recipe">
      <Grid container spacing={24}>
        <Grid xs={12} item>
          <Typography variant="h3" gutterBottom>
            {recipe.title}
          </Typography>

          <Typography variant="body1">
            {recipe.description}
          </Typography>

          <hr />
        </Grid>

        <Grid xs={12} md={6} item>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Ingredients
              </Typography>
              <List>
                {
                  recipe.recipe_ingredients.map((ingredient) => {
                    return (
                      <ListItem>
                        <ListItemText>
                          {ingredient.name}
                        </ListItemText>
                      </ListItem>
                    )
                  })
                }
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12} md={6} item>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Steps
              </Typography>
              <List>
                {
                  recipe.recipe_steps.map((step) => {
                    return (
                      <ListItem>
                        <ListItemText>
                          {step.step}
                        </ListItemText>
                      </ListItem>
                    )
                  })
                }
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Recipe
