import React from "react";
import { BsTypeH1 } from "react-icons/bs";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../../pages/Login";

const ProtectedRoutes = () => {
  if (localStorage.getItem("token")) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
