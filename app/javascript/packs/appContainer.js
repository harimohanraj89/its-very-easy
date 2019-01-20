import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import App from './app';
import { receiveRecipes } from "../redux/actions"

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
