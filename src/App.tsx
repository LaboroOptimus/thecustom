import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Listing from './pages/Listing';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import PrivateRoute from './utils/routes/PrivateRoute';
import Add from './pages/Add';

import { useAuth } from './utils/hooks';

const App = () => {
  const isAuth = useAuth();

  return (
    <Router>
      <Switch>
        <Route path='/listing'>
          <Listing />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>

        <PrivateRoute isAuth={isAuth} path='/private'>
          <h1>Private Route</h1>
        </PrivateRoute>

        <PrivateRoute isAuth={isAuth} path='/add'>
          <Add />
        </PrivateRoute>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
