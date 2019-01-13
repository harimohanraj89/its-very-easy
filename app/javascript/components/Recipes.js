import React from "react"
import PropTypes from "prop-types"

class Recipes extends React.Component {
  recipes() {
    return (this.props.recipes || []);
  }

  render () {
    return (
      <ul>
        {this.recipes().map(recipe => (
          <li key={recipe.title}>
            <strong>{recipe.title}</strong>: {recipe.description}
          </li>
        ))}
      </ul>
    );
  }
}

Recipes.propTypes = {
  recipes: PropTypes.array
}

export default Recipes
