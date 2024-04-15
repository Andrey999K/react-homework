import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useIntersectionObserver } from "./useIntersectionObserver";

export const useGetListItems = <T>(url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [listItems, setlistItems] = useState<T[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
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
      url,
      params: { page: pageNumber }
    })
      .then(res => {
        setlistItems(prevState => [...prevState, ...res.data.results]);
        setHasMore(res.data.results.length > 0);
      })
      .catch(e => {
        if (axios.isCancel(e)) {
          return;
        }
        setHasMore(false);
        setError(false);
        console.log(e);
      })
      .finally(() => setLoading(false));
  }, [pageNumber]);

  return {
    loading,
    error,
    listItems,
    lastNodeRef
  };
};
