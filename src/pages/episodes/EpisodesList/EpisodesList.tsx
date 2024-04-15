import React from "react";
import { Link } from "react-router-dom";
import useSort from "../../../hooks/useSort";
import sortByDateCreated from "../../../utils/sortByDateCreated";
import Button from "../../../components/common/Button";
import { convertDataTime } from "../../../utils/convertDataTime";
import { useGetListItems } from "../../../hooks/useGetListItems";
import { Episode } from "../../../types";

export const EpisodesList = () => {
  const { sortByCreated, handlerToggle } = useSort();
  const {
    loading,
    error,
    listItems: episodes,
    lastNodeRef
  } = useGetListItems<Episode>("episode");
  return (
    <div>
      <div className="bg-gray">
        <Button onClick={handlerToggle}>{sortByCreated}</Button>
      </div>
      <ul className="flex flex-col gap-5">
        {sortByDateCreated(episodes, sortByCreated).map((item, index) => {
          if (episodes.length - 3 === index + 1) {
            return (
              <li ref={lastNodeRef} key={item.id}>
                <Link
                  to={`/episodes/${item.id}`}
                  className="flex items-center gap-5"
                >
                  <span className="w-full max-w-[300px]">{item.name}</span>
                  <span className="w-full max-w-[300px]">
                    {convertDataTime(item.created)}
                  </span>
                </Link>
              </li>
            );
          } else {
            return (
              <li key={item.id}>
                <Link
                  to={`/episodes/${item.id}`}
                  className="flex items-center gap-5"
                >
                  <span className="w-full max-w-[300px]">{item.name}</span>
                  <span className="w-full max-w-[300px]">
                    {convertDataTime(item.created)}
                  </span>
                </Link>
              </li>
            );
          }
        })}
        {loading && <div className="text-green-500">Loading...</div>}
        {error && <div className="text-red-500">Error!</div>}
      </ul>
    </div>
  );
};
