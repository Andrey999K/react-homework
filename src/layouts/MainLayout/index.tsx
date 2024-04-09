import React from "react";
import Navigation from "../../components/ui/Navigation";
import { Outlet } from "react-router-dom";
import AuthStatus from "../../components/ui/AuthStatus";

const MainLayout = () => {
  return (
    <div>
      <AuthStatus />
      <Navigation />
      <Outlet />
    </div>
  );
};

export default MainLayout;
