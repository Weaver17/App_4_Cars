import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink className={"navbar__link"} to="/">
        <p className="navbar__link-text">Models</p>
      </NavLink>
      <NavLink className="navbar__link" to="/makes">
        <p className="navbar__link-text">Makes</p>
      </NavLink>
      <NavLink className="navbar__link" to="/manufacturers">
        <p className="navbar__link-text">Manufacuters</p>
      </NavLink>
      <NavLink className="navbar__link" to="/part-details">
        <p className="navbar__link-text">Part Details</p>
      </NavLink>
    </nav>
  );
}

export default Navbar;
