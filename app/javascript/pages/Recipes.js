import React from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from "prop-types"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

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

          <CardActions>
            <Link to={`/recipes/${recipe.slug}`}>
              <Button size="small" color="primary">
                View
              </Button>
            </Link>
          </CardActions>
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
