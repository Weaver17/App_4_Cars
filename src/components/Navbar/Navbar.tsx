import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink className={"navbar__link"} to="/">
        <p className="navbar__link-text">Home</p>
      </NavLink>
      <NavLink className="navbar__link" to="/makes">
        <p className="navbar__link-text">Makes</p>
      </NavLink>
      <NavLink className="navbar__link" to="/parts">
        <p className="navbar__link-text">Parts</p>
      </NavLink>
    </nav>
  );
}

export default Navbar;
