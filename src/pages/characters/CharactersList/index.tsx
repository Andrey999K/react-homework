import React from "react";
import characters from "../../../data/characters.json";
import { Link } from "react-router-dom";
import { Character } from "../../../types";
import { convertDataTime } from "../../../utils/convertDataTime";

const CharactersList = () => {
  return (
    <ul className="list">
      {(characters as Character[]).map(item => (
        <li key={item.id}>
          <Link to={`/characters/${item.id}`} className="list__link">
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
            <span>{convertDataTime(item.created)}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CharactersList;
