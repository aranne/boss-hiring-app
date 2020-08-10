import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUserId } from "../features/users/authSlice";
import { Toast } from "antd-mobile";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function AuthenticateRoute({ children, ...rest }) {
  const currentUserId = useSelector(selectCurrentUserId);

  useEffect(() => {
    if (!currentUserId) {
      Toast.fail("Your login cession has expired, please login again");
    }
  });

  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUserId ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}