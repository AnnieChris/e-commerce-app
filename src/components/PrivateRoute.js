import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // User not logged in, redirect to Sign In page
    return <Navigate to="/signin" replace />;
  }

  // User logged in, render the children components
  return children;
};

export default PrivateRoute;
