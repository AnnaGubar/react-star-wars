import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <nav className={s.container}>
      <ul className={s.list__container}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? s["list__container-activeLink"] : s["list__container-link"]
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/people"
            className={({ isActive }) =>
              isActive ? s["list__container-activeLink"] : s["list__container-link"]
            }
          >
            People
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/not-found"
            className={({ isActive }) =>
              isActive ? s["list__container-activeLink"] : s["list__container-link"]
            }
          >
            Not Found
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
