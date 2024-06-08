import React from "react";
const LocationsList = React.lazy(() =>
  import("./LocationsList").then(module => ({
    default: module.LocationsList
  }))
);
export { LocationsList };
