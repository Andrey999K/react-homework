import React from "react";
import { useAuth } from "../../../app/providers/AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const auth = useAuth();
  const location = useLocation();
  if (auth?.user === null)
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  return <Outlet />;
};

export default PrivateRoute;
