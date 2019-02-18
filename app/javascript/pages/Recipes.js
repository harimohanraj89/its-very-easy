import React from "react"
import PropTypes from "prop-types"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Recipes extends React.Component {
  renderRecipe(recipe) {
    return (
      <Grid key={recipe.id} xs={12} item>
        <Card>
          <CardContent>
            <Typography variant="h3" gutterBottom>
              {recipe.title}
            </Typography>

            <Typography variant="body1">
              {recipe.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }

  render() {
    return(
      <div className="recipes">
        <Grid container spacing={24}>
          <Grid xs={12} item>
            <Typography variant="h1" gutterBottom>
              It's Very Easy!
            </Typography>
          </Grid>

          {this.props.recipes.map((recipe) => {
            return this.renderRecipe(recipe);
          })}
        </Grid>
      </div>
    )
  }
}

export default Recipes
