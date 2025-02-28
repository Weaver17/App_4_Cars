import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <p className="navbar__link-text navbar__link-text_active">Home</p>
      <p className="navbar__link-text">Makes</p>
      <p className="navbar__link-text">Parts</p>
    </nav>
  );
}

export default Navbar;
