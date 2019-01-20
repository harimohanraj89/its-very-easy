import React from "react"
import { connect } from "react-redux"

import RecipesPresenter from '../presenters/RecipesPresenter';

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
)(RecipesPresenter)

export default RecipesContainer
