import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { convertDataTime } from "../../../utils/convertDataTime";
import Button from "../../../components/common/Button";
import useSort from "../../../hooks/useSort";
import sortByDateCreated from "../../../utils/sortByDateCreated";
import axios from "axios";

export const CharactersList = () => {
  const { sortByCreated, handlerToggle } = useSort();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [charactersList, setCharactersList] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: "https://rickandmortyapi.com/api/character",
      params: { page: pageNumber }
    }).then(res => {
      setCharactersList(prevState => [...prevState, ...res.data.results]);
      console.log(res.data.results);
    });
  }, [pageNumber]);
  // if (!charactersList) return <div>Loading...</div>;
  return (
    <div>
      <div className="button-wrapper">
        <Button onClick={handlerToggle}>{sortByCreated}</Button>
      </div>
      <ul className="list">
        {sortByDateCreated(charactersList, sortByCreated).map(item => (
          <li key={item.id}>
            <Link to={`/characters/${item.id}`} className="list__link">
              <img src={item.image} alt={item.name} />
              <span className="list__name">{item.name}</span>
              <span className="list__datetime">
                {convertDataTime(item.created)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
