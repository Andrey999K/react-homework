import { AuthContextType, useAuth } from "../../app/providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const AuthStatus = () => {
  const auth = useAuth() as Required<AuthContextType>;
  const navigate = useNavigate();

  const handlerSignOut = () => {
    auth.signOut(() => {
      navigate("/");
    });
  };

  if (auth?.user === null) {
    return <p>You are not logged in.</p>;
  }
  return (
    <div className="flex items-center gap-2">
      <span>Welcome user {auth.user.email}</span>
      <Button type="primary" onClick={handlerSignOut}>
        SignOut
      </Button>
    </div>
  );
};

export default AuthStatus;
