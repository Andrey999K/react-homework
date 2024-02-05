import * as React from "react"
import SignIn from "./components/ui/SignIn";
import { OnSubmit } from "../types";

export function App() {
  const handlerSubmit: OnSubmit = (data) => {
    console.log(data);
  };

  return (
    <SignIn onSubmit={handlerSubmit} />
  );
}