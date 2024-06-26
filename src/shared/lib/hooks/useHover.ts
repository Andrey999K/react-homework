import { RefObject, useEffect, useRef, useState } from "react";

interface UseHoverInterface {
  hovered: boolean;
  ref: RefObject<HTMLDivElement | undefined>;
}

export function useHover(): UseHoverInterface {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);
  const handlerMouseHover = () => setHovered(prevState => !prevState);
  useEffect(() => {
    if (ref.current)
      ref.current.addEventListener("mouseenter", handlerMouseHover);
    if (ref.current)
      ref.current.addEventListener("mouseleave", handlerMouseHover);
    return () => {
      if (ref.current)
        ref.current.removeEventListener("mouseenter", handlerMouseHover);
      if (ref.current)
        ref.current.removeEventListener("mouseleave", handlerMouseHover);
    };
  }, []);
  return { hovered, ref };
}
