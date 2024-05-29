import { useEffect, useState } from "react";

interface FetchResult<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  refetch: RefetchFunction;
}

type RefetchParams = {
  params: {
    [key: string]: string | number;
  };
};

type RefetchFunction = (params: RefetchParams) => void;

export function useFetch<T>(url: string): FetchResult<T> {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState(null);

  const refetch = ({ params }: RefetchParams): void => {
    let newParams = {};
    for (const field in params) {
      newParams = { ...newParams, [field]: params[field].toString() };
    }
    url += "?" + new URLSearchParams(newParams).toString();
    fetchData();
  };

  const fetchData = () => {
    setLoading(true);
    fetch(url)
      .then((res: Response) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { data, isLoading, error, refetch };
}