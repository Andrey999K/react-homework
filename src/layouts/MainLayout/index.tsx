import { Suspense } from "react";
import Navigation from "../../components/ui/Navigation";
import { Outlet, useLocation } from "react-router-dom";
import AuthStatus from "../../components/ui/AuthStatus";
import ErrorBoundary from "../../components/ui/ErrorBoundary";

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
