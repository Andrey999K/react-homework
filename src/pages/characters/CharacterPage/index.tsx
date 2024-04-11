import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ObjectDefault } from "../../../types";
import axios from "axios";

export const CharacterPage = () => {
  const [character, setCharacter] = useState<ObjectDefault | null>();
  const { characterId } = useParams();
  const [loading, setLoading] = useState(true);
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
    <div className="flex mt-5 gap-5">
      <img
        className="w-full max-w-[300px]"
        src={character.image}
        alt={character.name}
      />
      <ul className="flex flex-col gap-5">
        {Object.keys(character).map(field => {
          if (field !== "image" && typeof character[field] === "string") {
            return (
              <li key={field}>
                <b>{field}:</b> <span>{character[field]}</span>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
