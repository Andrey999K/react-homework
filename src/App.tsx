import * as React from "react"
import { useToggle } from "./hooks/useToggle";

export function App() {
  const [value, toggle] = useToggle(["blue", "orange", "cyan", "teal"]);

  return (
    <button onClick={() => toggle()}>
      {value}
    </button>
  );
}