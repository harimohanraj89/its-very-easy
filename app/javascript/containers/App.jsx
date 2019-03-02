import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import RecipesContainer from '../containers/RecipesContainer'
import RecipeContainer from '../containers/RecipeContainer'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/recipes" exact component={RecipesContainer} />
          <Route path="/recipes/:id" exact component={RecipeContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
