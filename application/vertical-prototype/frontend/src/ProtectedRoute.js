import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
  isLoggedIn: isLoggedIn,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn) {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
