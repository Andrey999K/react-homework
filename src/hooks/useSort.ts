import { SortedDirection } from "../types";
import { useSearchParams } from "react-router-dom";

const useSort = (initialState?: SortedDirection) => {
  const [searchParams, setSearchParams] = useSearchParams({ sort: initialState });
  const sortByCreated: SortedDirection = searchParams.get("sort") !== "DESC" ? "ASC" : "DESC";
  const handlerToggle = () => {
    setSearchParams({ sort: sortByCreated === "ASC" ? "DESC" : "ASC" });
  };
  return { sortByCreated, handlerToggle };
};

export default useSort;
