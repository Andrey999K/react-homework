import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ObjectDefault } from "../../../types";
import axios from "axios";

export const EpisodePage = () => {
  const { episodeId } = useParams();
  const [episode, setEpisode] = useState<ObjectDefault | null>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/episode/${episodeId}`
    })
      .then(res => {
        setEpisode(res.data);
        setLoading(false);
      })
      .catch(e => {
        if (axios.isCancel(e)) {
          return;
        }
        setError(true);
        console.log(e);
      });
  }, []);

  if (loading || !episode)
    return <div className="text-center w-full">Loading...</div>;
  if (error) return <div className="text-red-500">Error!</div>;

  return (
    <ul className="flex flex-col gap-5">
      {Object.keys(episode).map(field => {
        if (typeof episode[field] === "string") {
          return (
            <li key={field}>
              <b>{field}: </b>
              <span>{episode[field]}</span>
            </li>
          );
        }
      })}
    </ul>
  );
};
