import React from "react"
import { connect } from "react-redux"

import AppPresenter from '../presenters/AppPresenter';
import { receiveRecipes } from "../actions"

const mapStateToProps = state => {
  return {
    recipes: { name: "AppContainer salad"}
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadRecipes: response => {
      dispatch(receiveRecipes(response))
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppPresenter)

export default AppContainer
