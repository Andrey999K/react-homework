import * as React from 'react'
import {useFetch} from "../hooks/useFetch";
import {DataItem} from "../types";
import {useEffect} from "react";

export function App() {
  const {
    data,
    isLoading,
    error,
    refetch
  } = useFetch('https://jsonplaceholder.typicode.com/posts');

  useEffect(() => {
    console.log({ data });
  }, [data]);

  return (
    <div>
      <div>
        <button onClick={() => refetch({
          params: {
            _limit: 3
          }
        })}>
          Перезапросить
        </button>
      </div>
      {isLoading && 'Загрузка...'}
      {error && 'Произошла ошибка'}
      {console.log(data)}
      {data && !isLoading && data.map((item: DataItem) => <div key={item.id}>{item.title}</div>) }
    </div>
  );
}
