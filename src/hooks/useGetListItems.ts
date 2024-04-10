import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";

export const useGetListItems = <T>(url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [listItems, setlistItems] = useState<T[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastNodeRef = useCallback(
    (node: HTMLElement | null) => {
      if (loading) return;
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevState => prevState + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore]
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
