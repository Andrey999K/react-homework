import React from "react";
const CharactersList = React.lazy(() =>
  import("./CharactersList").then(module => ({
    default: module.CharactersList
  }))
);
export { CharactersList };
