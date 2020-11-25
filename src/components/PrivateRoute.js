import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getUser } from "../util/storage";

/**
 *
 * Higher order component that only displays a route if a user is logged in,
 * otherwise they are redirected to startup page.
 */
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return getUser() == null ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};

export default PrivateRoute;
