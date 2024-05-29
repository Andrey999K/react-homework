import { SortedDirection } from "../types";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

enum SortTypes {
  ASC = "ASC",
  DESC = "DESC"
}

const useSort = (initialState?: SortedDirection) => {
  const [searchParams, setSearchParams] = useSearchParams({
    sort: initialState || SortTypes.ASC
  });
  const { ASC, DESC } = SortTypes;
  const sortByCreated: SortedDirection =
    searchParams.get("sort") !== DESC ? ASC : DESC;
  const handlerToggle = () => {
    setSearchParams({ sort: sortByCreated === ASC ? DESC : ASC });
  };
  useEffect(() => {
    setSearchParams({ sort: sortByCreated });
  }, []);
  return { sortByCreated, handlerToggle };
};

export default useSort;
