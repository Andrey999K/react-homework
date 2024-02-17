import React from "react";
import episodes from "../../../data/episodes.json";
import { Link } from "react-router-dom";

const EpisodesList = () => {
  return (
    <ul className="list">
      {episodes.map(item => (
        <li key={item.id}>
          <Link to={`/episodes/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default EpisodesList;
