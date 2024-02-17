import React from "react";
import characters from "../../../data/characters.json";
import { useParams } from "react-router-dom";
import { ObjectDefault } from "../../../../types";
import "./CharacterPage.scss";

const CharacterPage = () => {
  const { characterId } = useParams();
  const character: ObjectDefault = characters.find(item => item.id.toString() === characterId);
  return (
    <div className="character">
      <img className="character__image" src={character.image} alt={character.name} />
      <ul className="list">
        {Object.keys(character).map(item => {
          if (item !== "image")
            return (
              <li key={item}>
                <b>{item}:</b> <span>{character[item]}</span>
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default CharacterPage;
