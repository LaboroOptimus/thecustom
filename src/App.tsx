import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Listing from './components/Listing';
import Home from './components/Home';

const App = () => {
  return (
      <Router>
          <Switch>
              <Route path="/listing">
                  <Listing />
              </Route>
              <Route path="/">
                  <Home />
              </Route>
          </Switch>
      </Router>
  )
}

export default App;
