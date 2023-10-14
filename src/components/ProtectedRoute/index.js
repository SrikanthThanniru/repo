import React from "react";
import { Route, useNavigate } from "react-router-dom";

const isLoggedIn = localStorage.getItem("isLoggedIn");

const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  if (isLoggedIn === "true") {
    return <Route {...props} />;
  } else {
    // Use the useNavigate hook to perform redirection

    navigate("/login");
    return null;
  }
};

export default ProtectedRoute;
