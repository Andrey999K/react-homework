import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  const nav = [
    {
      id: 1,
      path: "/",
      text: "Главная"
    },
    {
      id: 2,
      path: "/characters",
      text: "Герои"
    },
    {
      id: 3,
      path: "/episodes",
      text: "Эпизоды"
    },
    {
      id: 4,
      path: "/locations",
      text: "Локации"
    }
  ];
  return (
    <nav>
      <ul className="nav">
        {nav.map(item => (
          <li key={item.id}>
            <NavLink className="nav__link" to={item.path}>
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
