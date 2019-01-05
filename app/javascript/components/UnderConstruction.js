import React from "react"
import PropTypes from "prop-types"
class UnderConstruction extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.greeting}
      </React.Fragment>
    );
  }
}

UnderConstruction.propTypes = {
  greeting: PropTypes.string
};
export default UnderConstruction
