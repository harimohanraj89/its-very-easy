import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Recipes from './Recipes';

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
