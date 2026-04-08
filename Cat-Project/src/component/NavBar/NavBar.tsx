import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router";

export default function NavBar(): React.JSX.Element {
  return (
    <>
      <ul className="nav-links">
        <li className="links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "item-links active" : "item-links"
            }
          >
            Все котики
          </NavLink>
        </li>
        <li className="links">
          <NavLink
            to="/favorite"
            className={({ isActive }) =>
              isActive ? "item-links active" : "item-links"
            }
          >
            Любимые котики
          </NavLink>
        </li>
      </ul>
    </>
  );
}
