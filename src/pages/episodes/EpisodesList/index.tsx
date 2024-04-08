import React from "react";
import episodes from "../../../mock/episodes.json";
import { Link } from "react-router-dom";
import useSort from "../../../hooks/useSort";
import sortByDateCreated from "../../../utils/sortByDateCreated";
import Button from "../../../components/common/Button";
import { convertDataTime } from "../../../utils/convertDataTime";

const EpisodesList = () => {
  const { sortByCreated, handlerToggle } = useSort();
  return (
    <div>
      <div className="bg-gray">
        <Button onClick={handlerToggle}>{sortByCreated}</Button>
      </div>
      <ul className="list">
        {sortByDateCreated(episodes, sortByCreated).map(item => (
          <li key={item.id}>
            <Link to={`/episodes/${item.id}`} className="list__link">
              <span className="list__name">{item.name}</span>
              <span className="list__datetime">{convertDataTime(item.created)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodesList;
