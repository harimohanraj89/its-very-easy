import React from "react"
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"
import axios from "axios"

import UnderConstruction from '../presenters/UnderConstruction';
import RecipesContainer from '../containers/RecipesContainer';

class App extends React.Component {
  componentDidMount() {
    this.loadRecipes()
  }

  loadRecipes() {
    axios({
      method:'get',
      url:'/api/recipes',
      responseType:'json'
    })
    .then((response) => {
      this.props.onLoadRecipes(response)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return(
      <Router>
        <div>
          <Route exact path='/app' component={RecipesContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
