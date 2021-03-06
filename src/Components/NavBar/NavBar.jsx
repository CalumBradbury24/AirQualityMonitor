import React, { useState } from "react";
import "./NavBar.styles.scss";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/hamburger.svg";
import AirLogo from "../Logo/Logo";
const NavBar = () => {
  //Hooks gives functional components similar state functionality as classes
  let location = useLocation(); //React Router hook to get current path
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="responsive-toolbar">
      <ul className={navOpen ? "active" : ""}>
        <figure onClick={() => setNavOpen(!navOpen)}>
          <img src={logo} height="40px" width="40px" alt="logo"></img>
        </figure>
        <Link
          className={
            "list-item " + location.pathname === "/" ? "stayOrange" : "default"
          }
          to="/"
          onClick={navOpen ? () => setNavOpen(false) : null}
        >
          Current Air Quality
        </Link>
        <Link
          className={
            "list-item " + location.pathname === "/Historical"
              ? "stayOrange"
              : "default"
          }
          to="/Historical"
          onClick={navOpen ? () => setNavOpen(false) : null}
        >
          Historical Air Quality
        </Link>
        <Link
          className={
            "list-item " + location.pathname === "/About"
              ? "stayOrange"
              : "default"
          }
          to="/About"
          onClick={navOpen ? () => setNavOpen(false) : null}
        >
          About Project
        </Link>
      </ul>
      <AirLogo />
    </nav>
  );
};

export default NavBar;
