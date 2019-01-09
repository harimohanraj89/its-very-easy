import React from "react"
import PropTypes from "prop-types"

class Recipes extends React.Component {
  constructor () {
    super()

    this.state = {
      loading: true,
      recipes: []
    }
  }

  componentDidMount () {
    console.log("RECIPES MOUNTED")
  }

  render () {
    return (
      <React.Fragment>
        Loading...
      </React.Fragment>
    );
  }
}

export default Recipes
