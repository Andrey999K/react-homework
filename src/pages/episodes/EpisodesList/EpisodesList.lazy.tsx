import React from "react";
const EpisodesList = React.lazy(() =>
  import("./EpisodesList").then(module => ({
    default: module.EpisodesList
  }))
);
export { EpisodesList };
