import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import UnderConstruction from '../components/UnderConstruction';
import RecipesContainer from '../components/RecipesContainer';

const App = (props) => (
  <Router>
    <div>
      <Route exact path='/app' component={RecipesContainer} />
    </div>
  </Router>
)

export default App;
