import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// @ts-ignore
const PublicRoute = ({ children, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/home',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PublicRoute;
