import React, { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate } from "react-router";

const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  return logged ? <Navigate to="/marvel" /> : children;
};

export default PublicRoute;
