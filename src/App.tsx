import * as React from "react"
import SignIn from "./components/ui/SignIn";
import { OnSubmit } from "../types";
import SignUp from "./components/ui/SignUp";

export function App() {
  const handlerSubmit: OnSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <SignIn onSubmit={handlerSubmit} />
      <SignUp onSubmit={handlerSubmit} />
    </div>
  );
}