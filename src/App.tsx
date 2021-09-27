import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Listing from './pages/Listing';
import Home from './pages/Home';

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
