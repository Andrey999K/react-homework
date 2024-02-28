import React from "react";
import { useAuth } from "../../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button";

const AuthStatus = () => {
  const auth = useAuth();
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
      <Button onClick={handlerSignOut}>SignOut</Button>
    </div>
  );
};

export default AuthStatus;
