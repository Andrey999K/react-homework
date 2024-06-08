import React from "react";
const NotFound = React.lazy(() =>
  import("./NotFound").then(module => ({
    default: module.NotFound
  }))
);
export { NotFound };
