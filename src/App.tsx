import AppRouter from "./components/ui/AppRouter";
import AuthProvider from "./context/AuthProvider";

export function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}
