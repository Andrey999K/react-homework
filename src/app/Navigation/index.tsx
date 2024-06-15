import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import { routes } from "../AppRouter";

const Navigation = () => {
  const nav = [
    {
      id: 1,
      path: "/",
      text: "Главная"
    },
    {
      id: 2,
      path: `/${routes.characters}?sort=ASC`,
      text: "Герои"
    },
    {
      id: 3,
      path: `/${routes.episodes}?sort=ASC`,
      text: "Эпизоды"
    },
    {
      id: 4,
      path: `/${routes.locations}?sort=ASC`,
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
