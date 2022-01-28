import { NavLink } from "react-router-dom";
import "../styles/Nav.scss";

export const Nav = () => {
  return (
    <div className="Nav">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="projects">Projects</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
