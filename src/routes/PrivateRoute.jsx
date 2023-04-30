import React, { useContext } from "react";
import { AuthContex } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContex);
  const location = useLocation();
  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" variant="success" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
