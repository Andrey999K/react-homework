import * as React from "react";
import { useWindowScroll } from "./hooks/useWindowScroll";

export function App() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div className="scrool-data">
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
    </div>
  );
}
