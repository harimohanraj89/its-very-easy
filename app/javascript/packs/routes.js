import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import UnderConstruction from '../components/UnderConstruction';
import Recipes from '../components/Recipes';

const App = (props) => (
  <Router>
    <div>
      <Route exact path='/app' component={Recipes} />
    </div>
  </Router>
)

export default App;
