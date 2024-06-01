import AppRouter from "../components/ui/AppRouter";
import AuthProvider from "./providers/AuthProvider";

export function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}
