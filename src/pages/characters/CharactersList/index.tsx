import React from "react";
import characters from "../../../data/characters.json";
import { Link } from "react-router-dom";

const CharactersList = () => {
  return (
    <ul className="list">
      {characters.map(item => (
        <li key={item.id}>
          <Link to={`/characters/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CharactersList;
