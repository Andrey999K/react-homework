import React from "react";
import characters from "../../../mock/characters.json";
import { Link } from "react-router-dom";
import { convertDataTime } from "../../../utils/convertDataTime";
import Button from "../../../components/common/Button";
import useSort from "../../../hooks/useSort";
import sortByDateCreated from "../../../utils/sortByDateCreated";

const CharactersList = () => {
  const { sortByCreated, handlerToggle } = useSort();
  return (
    <div>
      <div className="button-wrapper">
        <Button onClick={handlerToggle}>{sortByCreated}</Button>
      </div>
      <ul className="list">
        {sortByDateCreated(characters, sortByCreated).map(item => (
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
