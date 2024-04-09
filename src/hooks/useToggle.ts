import { useState } from "react";

export function useToggle(states: Array<string> = ["true", "false"]): [string, () => void] {
  const [index, setIndex] = useState(0);

  const toggle = (): void => {
    setIndex(prevState => prevState >= states.length - 1 ? 0 : prevState + 1);
  };

  return [states[index], toggle];
}