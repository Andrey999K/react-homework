import React from "react";
const Login = React.lazy(() =>
  import("./Login").then(module => ({
    default: module.Login
  }))
);
export { Login };
