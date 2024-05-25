import SignIn from "../../components/ui/SignIn";
import { User } from "../../types";
import { AuthContextType, useAuth } from "../../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const auth = useAuth() as Required<AuthContextType>;
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const handlerSubmit = (data: User) => {
    auth.signIn(data, () => {
      navigate(from, {
        replace: true
      });
    });
  };
  return (
    <div className="flex justify-center w-full items-center h-full grow">
      <SignIn onSubmit={handlerSubmit} />
    </div>
  );
};
