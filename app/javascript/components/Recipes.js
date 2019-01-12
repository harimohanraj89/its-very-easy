import React from "react"
import PropTypes from "prop-types"
import axios from "axios"

class Recipes extends React.Component {
  constructor () {
    super()

    this.state = {
      loading: true,
      error: false,
      recipes: []
    }
  }

  componentDidMount () {
    axios({
      method:'get',
      url:'/api/recipes',
      responseType:'json'
    })
      .then((response) => {
        this.setState({
          loading: false,
          recipes: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render () {
    if (this.state.error) {
      return (
        <React.Fragment>
          Something went wrong, please try again!
        </React.Fragment>
      );
    } else if (this.state.loading) {
      return (
        <React.Fragment>
          Loading...
        </React.Fragment>
      );
    } else {
      return (
        <ul>
          {this.state.recipes.map(recipe => (
            <li key={recipe.title}>
              <strong>{recipe.title}</strong>: {recipe.description}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Recipes
