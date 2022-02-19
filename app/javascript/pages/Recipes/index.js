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

import Fg from '../../images/fg.png'

class Recipes extends React.Component {
  renderRecipe(recipe) {
    return (
      <Grid key={recipe.id} xs={12} md={3} item key={recipe.position}>
        <Link to={`/recipes/${recipe.slug}`} style={{ textDecoration: 'none' }}>
          <div className={`recipe-item recipe-item-${(recipe.position - 1) % 6 + 1}`}>
            <div className="recipe-item_title">
              <h2>
                {recipe.title}
              </h2>
            </div>
          </div>
        </Link>
      </Grid>
    );
  }

  render() {
    return(
      <div className="recipes">
        <Grid container spacing={0}>
          <Grid xs={12} item>
            <div className="recipes_header">
              <Card className="recipes_header-card">
                <CardContent>
                  <h1 className="recipes_title">
                    It's Very Easy!
                  </h1>
                  <br></br>
                  <h2 className="recipes_subtitle">
                    Easy Recipes For Beginners
                  </h2>
                </CardContent>
              </Card>
            </div>
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
