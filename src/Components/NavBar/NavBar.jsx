import React from "react";
import "./NavBar.styles.scss";
import { Link, useLocation } from "react-router-dom";
import AirLogo from '../Logo/Logo';
const NavBar = () => {
//Hooks gives functional components similar state functionality as classes
  let location = useLocation();//React Router hook to get current path
  return (
    <div className="nav">
      <ul className="list">
        <li className="navbar-item ">
          <Link
            className={location.pathname === "/" ? "stayOrange" : "default"}
            to="/"
          >
            Current Air Quality
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            className={location.pathname === "/Historical" ? "stayOrange" : "default"}
            to="/Historical"
          >
            Historical Air Quality
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            className={location.pathname === "/About" ? "stayOrange" : "default"}
            to="/About"
          >
            About Project
          </Link>
        </li>
      </ul>
      <AirLogo />
    </div>
  );
};

export default NavBar;
