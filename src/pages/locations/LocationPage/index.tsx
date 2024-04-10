import React from "react";
import { useParams } from "react-router-dom";
import locations from "../../../mock/locations.json";
import { ObjectDefault } from "../../../types";

export const LocationPage = () => {
  const { locationId } = useParams();
  const location: ObjectDefault = locations.find(
    location => location.id.toString() === locationId
  );
  return (
    <ul className="flex flex-col gap-5">
      {Object.keys(location).map(field => (
        <li>
          <b>{field}: </b>
          <span>{location[field]}</span>
        </li>
      ))}
    </ul>
  );
};
