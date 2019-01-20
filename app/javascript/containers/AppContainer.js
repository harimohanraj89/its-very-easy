import React from "react"
import { connect } from "react-redux"

import App from '../components/App';
import { receiveRecipes } from "../actions"

const mapStateToProps = state => {
  return {
    recipes: { name: "Potato salad"}
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
)(App)

export default AppContainer
