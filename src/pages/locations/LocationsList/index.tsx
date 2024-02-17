import React from "react";
import locations from "../../../data/locations.json";
import { Link } from "react-router-dom";

const LocationsList = () => {
  console.log(locations);
  return (
    <ul className="list">
      {locations.map(item => (
        <li key={item.id}>
          <Link to={`/locations/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default LocationsList;
