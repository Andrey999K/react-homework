import React from "react";
const EpisodePage = React.lazy(() =>
  import("./EpisodePage").then(module => ({
    default: module.EpisodePage
  }))
);
export { EpisodePage };
