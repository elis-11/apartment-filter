import { NavLink } from "react-router-dom";
import { Logo } from "./logo/Logo";
import "../styles/Nav.scss";

export const Nav = () => {
  return (
    <div className="Nav">
      <Logo />
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
          <li>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
