import React, { useCallback, useRef } from "react";

export const useIntersectionObserver = (
  loading: boolean,
  setPageNumber: React.Dispatch<React.SetStateAction<number>>,
  hasMore: boolean
) => {
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
  return { lastNodeRef };
};
