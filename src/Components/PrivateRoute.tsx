import React from "react";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "../Redux/store";

const PrivateRoute = ({ children }: any) => {
  const { isAdminAuth } = useAppSelector((state) => state.adminProductReducer);

  return localStorage.getItem("currentUser") && isAdminAuth ? (
    children
  ) : (
    <Navigate to="/adminlogin" />
  );
};

export default PrivateRoute;
