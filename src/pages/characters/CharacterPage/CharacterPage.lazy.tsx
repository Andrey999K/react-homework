import React from "react";
const CharacterPage = React.lazy(() =>
  import("./CharacterPage").then(module => ({ default: module.CharacterPage }))
);
export { CharacterPage };
