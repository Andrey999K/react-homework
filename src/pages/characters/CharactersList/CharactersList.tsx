import React from "react";
import { Link } from "react-router-dom";
import { convertDataTime } from "../../../utils/convertDataTime";
import Button from "../../../components/common/Button";
import useSort from "../../../hooks/useSort";
import sortByDateCreated from "../../../utils/sortByDateCreated";
import { useGetListItems } from "../../../hooks/useGetListItems";
import { Character } from "../../../types";

export const CharactersList: React.FC = () => {
  const { sortByCreated, handlerToggle } = useSort();
  const {
    loading,
    error,
    listItems: charactersList,
    lastNodeRef
  } = useGetListItems<Character>("character");

  return (
    <div>
      <div className="mb-5">
        <Button onClick={handlerToggle}>{sortByCreated}</Button>
      </div>
      <ul className="flex flex-col gap-5">
        {sortByDateCreated(charactersList, sortByCreated).map((item, index) => {
          if (charactersList.length - 3 === index + 1) {
            return (
              <li ref={lastNodeRef} key={item.id}>
                <Link
                  to={`/characters/${item.id}`}
                  className="flex items-center gap-5"
                >
                  <img
                    className="w-full h-wull max-w-[50px] max-h-[50px]"
                    src={item.image}
                    alt={item.name}
                  />
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
                  to={`/characters/${item.id}`}
                  className="flex items-center gap-5"
                >
                  <img
                    className="w-full h-wull max-w-[50px] max-h-[50px]"
                    src={item.image}
                    alt={item.name}
                  />
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
