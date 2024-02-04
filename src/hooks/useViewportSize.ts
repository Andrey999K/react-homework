import { useWindowEvent } from "./useWindowEvent";
import { useCallback, useState } from "react";
import { useThrottle } from "./useThrottle";

export function useViewportSize() {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });
  const handlerResize = () => {
    setSize({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }
  useWindowEvent("resize", handlerResize);
  return size;
}