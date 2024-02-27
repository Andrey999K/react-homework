import React from "react";
import SignIn from "../../components/ui/SignIn";
import { OnSubmit } from "../../types";

const Login = () => {
  const handlerSubmit: OnSubmit = data => {
    console.log(data);
  };
  return (
    <div className="flex justify-center w-full items-center">
      <SignIn onSubmit={handlerSubmit} />
    </div>
  );
};

export default Login;
