import React from "react";
import { useParams } from "react-router-dom";
import episodes from "../../../mock/episodes.json";
import { ObjectDefault } from "../../../types";

export const EpisodePage = () => {
  const { episodeId } = useParams();
  const episode: ObjectDefault = episodes.find(
    episode => episode.id.toString() === episodeId
  );
  return (
    <ul className="flex flex-col gap-5">
      {Object.keys(episode).map(field => (
        <li key={field}>
          <b>{field}: </b>
          <span>{episode[field]}</span>
        </li>
      ))}
    </ul>
  );
};
