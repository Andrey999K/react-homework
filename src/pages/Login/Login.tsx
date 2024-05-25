import React from "react";
import SignIn from "../../components/ui/SignIn";
import { OnSubmit, User } from "../../types";
import { useAuth } from "../../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const auth = useAuth();
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
    <div className="flex justify-center w-full items-center">
      <SignIn onSubmit={handlerSubmit} />
    </div>
  );
};
