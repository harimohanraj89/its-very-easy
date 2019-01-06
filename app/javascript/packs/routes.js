import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import UnderConstruction from '../components/UnderConstruction';

const App = (props) => (
  <Router>
    <div>
      <Route exact path='/root' component={UnderConstruction} />
    </div>
  </Router>
)

export default App;
