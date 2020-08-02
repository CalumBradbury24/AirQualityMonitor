import React from "react";
import "./Logo.styles.scss";
import Logo from '../../assets/Logo.jpg'

const AirLogo = () => (
  <span className= ''>
    {" "}
    <img className="logo" src={Logo} alt="Logo" />
  </span>
);

export default AirLogo;
