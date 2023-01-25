import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import LightMode from "../lightMode/LightMode";
import "./navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-div">
        <div className="logo-switcher-container">
          <Link className="nav-pages" to="/">
            <img
              id="earth-logo"
              src="../../images/green-earth.png"
              alt="earth logo"
            />
          </Link>
          <LightMode />
        </div>
        <HamburgerMenu />
      </div>
    </nav>
  );
}
export default Navbar;
