import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ObjectDefault } from "../../../types";
import axios from "axios";

export const LocationPage = () => {
  const { locationId } = useParams();
  const [location, setLocation] = useState<ObjectDefault | null>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/location/${locationId}`
    })
      .then(res => {
        setLocation(res.data);
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

  if (loading) return <div className="text-center w-full">Loading...</div>;
  if (error) return <div className="text-red-500">Error!</div>;

  return (
    <ul className="flex flex-col gap-5">
      {Object.keys(location).map(field => {
        if (field !== "image" && typeof location[field] === "string") {
          return (
            <li key={field}>
              <b>{field}: </b> <span>{location[field]}</span>
            </li>
          );
        }
      })}
    </ul>
  );
};
