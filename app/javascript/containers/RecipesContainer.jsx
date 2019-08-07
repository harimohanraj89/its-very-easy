import React from 'react';
import axios from 'axios';

import Recipes from '../pages/Recipes/index'

class RecipesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, recipes: [] }
  }

  componentDidMount() {
    this.fetchRecipes();
  }

  fetchRecipes() {
    this.setState({ loading: true });

    axios.get('/api/recipes')
      .then((response) => {
        this.setState({
          loading: false,
          recipes: response.data.recipes
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if(this.state.loading) {
      return(<h1>Loading...</h1>)
    } else {
      return(<Recipes recipes={this.state.recipes} />)
    }

  }
}

export default RecipesContainer
