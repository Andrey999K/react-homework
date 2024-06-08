import { useWindowEvent } from "./useWindowEvent.ts";
import { useState } from "react";
import { useThrottle } from "./useThrottle.ts";

export function useViewportSize() {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });
  const throttleValue = useThrottle(size, 300);
  const handlerResize = () => {
    setSize({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };
  useWindowEvent("resize", handlerResize);
  return throttleValue;
}
