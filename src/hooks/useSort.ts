import { SortedDirection } from "../types";
import { useSearchParams } from "react-router-dom";

const useSort = (initialState?: SortedDirection) => {
  const [searchParams, setSearchParams] = useSearchParams({ sort: initialState });
  const sortByCreated = searchParams.get("sort") || "ASC";
  const handlerToggle = () => {
    setSearchParams({ sort: sortByCreated === "ASC" ? "DESC" : "ASC" });
  };
  return { sortByCreated, handlerToggle };
};

export default useSort;
