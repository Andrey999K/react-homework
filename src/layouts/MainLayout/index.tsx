import React, { Suspense } from "react";
import Navigation from "../../components/ui/Navigation";
import { Outlet } from "react-router-dom";
import AuthStatus from "../../components/ui/AuthStatus";

const MainLayout = () => {
  return (
    <div>
      <AuthStatus />
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MainLayout;
