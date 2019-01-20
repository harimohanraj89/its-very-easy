import React from "react"
import { connect } from "react-redux"

import Recipes from '../components/Recipes';

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const RecipesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipes)

export default RecipesContainer
