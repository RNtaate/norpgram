import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({component: Component, ...rest}) => {

  let {currentUser} = useAuth();

  return (
    <Route
      {...rest}
      render = {(props) => {
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }}
    >
    </Route>
  )
}

export default PrivateRoute;
