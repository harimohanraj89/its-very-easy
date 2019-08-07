import React from 'react';
import axios from 'axios';

import Recipe from '../pages/Recipe/index'

class RecipeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true }
  }

  componentDidMount() {
    this.fetchRecipe();
  }

  fetchRecipe() {
    this.setState({ loading: true });

    axios.get(`/api/recipes/${this.recipeId()}`)
      .then((response) => {
        this.setState({
          loading: false,
          recipe: response.data.recipe
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  recipeId() {
    return this.props.match.params.id;
  }

  render() {
    if(this.state.loading) {
      return(<h1>Loading...</h1>)
    } else {
      return(<Recipe recipe={this.state.recipe} />)
    }
  }
}

export default RecipeContainer;
