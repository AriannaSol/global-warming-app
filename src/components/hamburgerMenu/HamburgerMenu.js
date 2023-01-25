import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./hamburgerMenu.css";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="burger-menu">
      <div
        className={open ? "burger-container-light" : "burger-container-dark"}
        open={open}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={open ? "burger-menu-open" : "burger-menu-close"}>
        <Link className="burger-nav-pages" to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link
          className="burger-nav-pages"
          to="/temperature"
          onClick={closeMenu}
        >
          Temperatures
        </Link>
        <Link className="burger-nav-pages" to="/co2" onClick={closeMenu}>
          CO2
        </Link>
        <Link className="burger-nav-pages" to="/methane" onClick={closeMenu}>
          Methane
        </Link>
        <Link
          className="burger-nav-pages"
          to="/nitrous-oxide"
          onClick={closeMenu}
        >
          NO2
        </Link>
        <Link className="burger-nav-pages" to="/arctic" onClick={closeMenu}>
          Polar Ice
        </Link>
      </div>
    </div>
  );
};
export default HamburgerMenu;
