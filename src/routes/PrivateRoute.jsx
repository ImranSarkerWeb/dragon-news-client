import React, { useContext } from "react";
import { AuthContex } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContex);
  const location = useLocation();

  if (user) {
    return children;
  }
  return (
    <Navigate to="/login" state={{ from: location, replace: true }}></Navigate>
  );
};

export default PrivateRoute;
