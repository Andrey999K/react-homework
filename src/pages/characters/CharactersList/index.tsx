import React, { useEffect } from "react";
import characters from "../../../data/characters.json";
import { Link, useSearchParams } from "react-router-dom";
import { Character } from "../../../types";
import { convertDataTime } from "../../../utils/convertDataTime";
import Button from "../../../components/common/Button";
import { useToggle } from "../../../hooks/useToggle";

const CharactersList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortByCreated = searchParams.get("sort") || "ASC";
  const handlerToggle = () => {
    setSearchParams({ sort: sortByCreated === "ASC" ? "DESC" : "ASC" });
  };
  return (
    <div>
      <div className="button-wrapper">
        <Button onClick={handlerToggle}>{sortByCreated}</Button>
      </div>
      <ul className="list">
        {(characters as Character[])
          .sort((a, b) => {
            if (sortByCreated === "DESC") return (new Date(b.created) as any) - (new Date(a.created) as any);
            return (new Date(a.created) as any) - (new Date(b.created) as any);
          })
          .map(item => (
            <li key={item.id}>
              <Link to={`/characters/${item.id}`} className="list__link">
                <img src={item.image} alt={item.name} />
                <span className="list__name">{item.name}</span>
                <span className="list__datetime">{convertDataTime(item.created)}</span>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CharactersList;
