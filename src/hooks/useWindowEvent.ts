import { useEffect } from "react";

type WindowEventType = keyof WindowEventMap;

export function useWindowEvent(
  type: WindowEventType,
  listener: (this: Window, ev: Event) => any,
  options?: boolean | AddEventListenerOptions
) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener]);
}