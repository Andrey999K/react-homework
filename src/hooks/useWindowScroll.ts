import { useWindowEvent } from "./useWindowEvent";
import { useEffect, useState } from "react";

interface ScrollResult {
  x?: number;
  y?: number;
}

export function useWindowScroll(): [
  ScrollResult,
  (coord: ScrollResult) => void
] {
  const [scroll, setScroll] = useState({
    x: window.scrollX,
    y: window.scrollY
  });

  const handleScroll = () => {
    setScroll({ x: window.scrollX, y: window.scrollY });
  };

  useWindowEvent("scroll", handleScroll);

  const scrollTo = (coord: ScrollResult) => {
    setScroll(prevState => ({ ...prevState, ...coord }));
  };

  useEffect(() => {
    window.scrollTo(scroll.x, scroll.y);
  }, [scroll]);

  return [scroll, scrollTo];
}
