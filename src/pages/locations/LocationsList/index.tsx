import { Link } from "react-router-dom";
import useSort from "../../../hooks/useSort";
import sortByDateCreated from "../../../utils/sortByDateCreated";
import { convertDataTime } from "../../../utils/convertDataTime";
import { useGetListItems } from "../../../hooks/useGetListItems";
import { Location } from "../../../types";
import { Button } from "antd";

export const LocationsList = () => {
  const { sortByCreated, handlerToggle } = useSort("ASC");
  const {
    loading,
    listItems: locations,
    lastNodeRef
  } = useGetListItems<Location>("location");
  console.log(locations);
  return (
    <div>
      <Button type="primary" onClick={handlerToggle}>
        {sortByCreated}
      </Button>
      <ul className="flex flex-col gap-5 mt-5">
        {sortByDateCreated(locations, sortByCreated).map((item, index) => {
          if (locations.length - 3 === index + 1) {
            return (
              <li ref={lastNodeRef} key={item.id}>
                <Link
                  to={`/locations/${item.id}`}
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
                  to={`/locations/${item.id}`}
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
      </ul>
    </div>
  );
};
