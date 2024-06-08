import React from "react";
const LocationPage = React.lazy(() =>
  import("./LocationPage").then(module => ({
    default: module.LocationPage
  }))
);
export { LocationPage };
