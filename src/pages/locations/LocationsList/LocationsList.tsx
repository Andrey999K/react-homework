import useSort from "../../../hooks/useSort";
import sortByDateCreated from "../../../utils/sortByDateCreated";
import Button from "../../../components/common/Button";
import { useGetListItems } from "../../../hooks/useGetListItems";
import { Character } from "../../../types";
import { ListItem } from "../../../components/common/ListItem";

export const LocationsList = () => {
  const { sortByCreated, handlerToggle } = useSort();
  const {
    loading,
    error,
    listItems: locations,
    lastNodeRef
  } = useGetListItems<Character>("location");
  console.log(locations);
  return (
    <div>
      <Button onClick={handlerToggle}>{sortByCreated}</Button>
      <ul className="flex flex-col gap-5 mt-5">
        {sortByDateCreated(locations, sortByCreated).map((item, index) => {
          const data = { ...item, url: `/locations/${item.id}` };
          if (locations.length - 3 === index + 1) {
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
