import React from "react";
import Button from "../../../components/common/Button";
import useSort from "../../../hooks/useSort";
import sortByDateCreated from "../../../utils/sortByDateCreated";
import { useGetListItems } from "../../../hooks/useGetListItems";
import { Character } from "../../../types";
import { ListItem } from "../../../components/common/ListItem";

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
      <Button onClick={handlerToggle}>{sortByCreated}</Button>
      <ul className="flex flex-col gap-5 mt-5">
        {sortByDateCreated(charactersList, sortByCreated).map((item, index) => {
          const data = { ...item, url: `/characters/${item.id}` };
          if (charactersList.length - 3 === index + 1) {
            return (
              <ListItem data={data} lastNodeRef={lastNodeRef} key={item.id} />
            );
          } else {
            return <ListItem data={data} key={item.id} />;
          }
        })}
        {loading && <div className="text-green-500">Loading...</div>}
        {error && <div className="text-red-500">Error!</div>}
      </ul>
    </div>
  );
};
