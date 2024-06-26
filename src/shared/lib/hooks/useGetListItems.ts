import { useEffect, useState } from "react";
import axios from "axios";
import { useIntersectionObserver } from "./useIntersectionObserver.ts";

const INITIAL_PAGE = 1;
const base_url = "https://rickandmortyapi.com/api/";

export const useGetListItems = <T>(url: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [listItems, setListItems] = useState<T[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(INITIAL_PAGE);
  const { lastNodeRef } = useIntersectionObserver(
    loading,
    setPageNumber,
    hasMore
  );

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: base_url + url,
      params: { page: pageNumber }
    })
      .then(res => {
        setTimeout(() => {
          setListItems(prevState => [...prevState, ...res.data.results]);
          setHasMore(res.data.results.length > 0);
        }, 1000);
      })
      .catch(e => {
        if (axios.isCancel(e)) {
          return;
        }
        setHasMore(false);
        setError(true);
        console.log(e);
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 1000);
        // setLoading(false);
      });
  }, [pageNumber]);

  return {
    loading,
    error,
    listItems,
    lastNodeRef
  };
};
