import { Suspense } from "react";
import Navigation from "../../app/Navigation";
import { Outlet, useLocation } from "react-router-dom";
import AuthStatus from "../../entities/AuthStatus";
import ErrorBoundary from "../../shared/ErrorBoundary";

const MainLayout = () => {
  const location = useLocation();
  return (
    <div className="h-full flex flex-col pt-5 m-auto max-w-screen-lg">
      <AuthStatus />
      <Navigation />
      <ErrorBoundary key={location.pathname}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default MainLayout;
