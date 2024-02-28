import React from "react";
import SignIn from "../../components/ui/SignIn";
import { OnSubmit, User } from "../../types";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handlerSubmit = (data: User) => {
    auth.signIn(data, () => {
      navigate("/");
    });
  };
  return (
    <div className="flex justify-center w-full items-center">
      <SignIn onSubmit={handlerSubmit} />
    </div>
  );
};

export default Login;
