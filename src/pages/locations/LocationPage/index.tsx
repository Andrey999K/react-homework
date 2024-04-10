import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ObjectDefault } from "../../../types";
import axios from "axios";

export const LocationPage = () => {
  const { locationId } = useParams();
  const [location, setLocation] = useState<ObjectDefault | null>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/location/${locationId}`
    }).then(res => {
      setLocation(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="text-center w-full">Loading...</div>;

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
