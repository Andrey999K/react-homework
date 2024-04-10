import React, { useEffect, useState } from "react";
import characters from "../../../mock/characters.json";
import { useParams } from "react-router-dom";
import { Character, ObjectDefault } from "../../../types";
import "./CharacterPage.scss";
import axios from "axios";

export const CharacterPage = () => {
  const [character, setCharacter] = useState<ObjectDefault | null>();
  const { characterId } = useParams();
  const [loading, setLoading] = useState(true);
  // const character: ObjectDefault = characters.find(
  //   item => item.id.toString() === characterId
  // );
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/character/${characterId}`
    }).then(res => {
      setCharacter(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="text-center w-full">Loading...</div>;

  return (
    <div className="character">
      <img
        className="character__image"
        src={character.image}
        alt={character.name}
      />
      <ul className="list">
        {Object.keys(character).map(item => {
          if (item !== "image" && typeof character[item] === "string") {
            return (
              <li key={item}>
                <b>{item}:</b> <span>{character[item]}</span>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
