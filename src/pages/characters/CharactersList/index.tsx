import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import { Link } from "react-router-dom";
import { convertDataTime } from "../../../utils/convertDataTime";
import Button from "../../../components/common/Button";
import useSort from "../../../hooks/useSort";
import sortByDateCreated from "../../../utils/sortByDateCreated";
import axios from "axios";
import { Character } from "../../../types";

export const CharactersList: React.FC = () => {
  const { sortByCreated, handlerToggle } = useSort();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [charactersList, setCharactersList] = useState<Character[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastNodeRef = useCallback(
    (node: HTMLElement | null) => {
      console.log("node: ", node);
      if (loading) return;
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevState => prevState + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore]
  );

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: "https://rickandmortyapi.com/api/character",
      params: { page: pageNumber }
    })
      .then(res => {
        setCharactersList(prevState => [...prevState, ...res.data.results]);
        setHasMore(res.data.results.length > 0);
      })
      .catch(e => {
        if (axios.isCancel(e)) {
          return;
        }
        setError(false);
        console.log(e);
      })
      .finally(() => setLoading(false));
  }, [pageNumber]);
  return (
    <div>
      <div className="button-wrapper">
        <Button onClick={handlerToggle}>{sortByCreated}</Button>
      </div>
      <ul className="list">
        {sortByDateCreated(charactersList, sortByCreated).map((item, index) => {
          if (charactersList.length - 3 === index + 1) {
            return (
              <li ref={lastNodeRef} key={item.id}>
                <Link to={`/characters/${item.id}`} className="list__link">
                  <img src={item.image} alt={item.name} />
                  <span className="list__name">{item.name}</span>
                  <span className="list__datetime">
                    {convertDataTime(item.created)}
                  </span>
                </Link>
              </li>
            );
          } else {
            return (
              <li key={item.id}>
                <Link to={`/characters/${item.id}`} className="list__link">
                  <img src={item.image} alt={item.name} />
                  <span className="list__name">{item.name}</span>
                  <span className="list__datetime">
                    {convertDataTime(item.created)}
                  </span>
                </Link>
              </li>
            );
          }
        })}
        {loading && <div className="text-green-500">Loading...</div>}
        {error && <div className="text-red-500">Error!</div>}
      </ul>
    </div>
  );
};
