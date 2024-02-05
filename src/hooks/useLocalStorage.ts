import {useEffect, useState} from "react";

type TypeSetItem = (value: string) => void;
type TypeRemoveItem = () => void;

export function useLocalStorage<UseLocalStorage>(field: string): [string, { setItem: TypeSetItem, removeItem: TypeRemoveItem }] {
  const [token, setToken] = useState<string | null>(null);
  const setItem = (value: string): void => {
    setToken(value);
    localStorage.setItem(field, JSON.stringify(value));
  };
  const removeItem = (): void => {
    localStorage.removeItem(field);
    setToken(null)
  };
  useEffect(() => {
    const value = localStorage.getItem(field);
    if (value) setToken(JSON.parse(value));
  }, []);
  return [token, { setItem, removeItem }];
}