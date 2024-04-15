import { useState } from "react";

export function useToggle(states: Array<string> = ["true", "false"], startValue?: number | string): [string, () => void] {
  const [index, setIndex] = useState<number>(
    typeof startValue === "string" ? states.findIndex(state => state === startValue) : 0
  );

  const toggle = (): void => {
    setIndex(prevState => (prevState >= states.length - 1 ? 0 : prevState + 1));
  };

  return [states[index], toggle];
}
