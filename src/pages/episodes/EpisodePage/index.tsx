import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ObjectDefault } from "../../../types";
import axios from "axios";

export const EpisodePage = () => {
  const { episodeId } = useParams();
  const [episode, setEpisode] = useState<ObjectDefault | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/episode/${episodeId}`
    }).then(res => {
      setEpisode(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="text-center w-full">Loading...</div>;

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
