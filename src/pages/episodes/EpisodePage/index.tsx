import React from "react";
import { useParams } from "react-router-dom";
import episodes from "../../../data/episodes.json";
import { ObjectDefault } from "../../../types";

const EpisodePage = () => {
  const { episodeId } = useParams();
  const episode: ObjectDefault = episodes.find(episode => episode.id.toString() === episodeId);
  return (
    <ul className="list">
      {Object.keys(episode).map(field => (
        <li key={field}>
          <b>{field}: </b>
          <span>{episode[field]}</span>
        </li>
      ))}
    </ul>
  );
};

export default EpisodePage;
