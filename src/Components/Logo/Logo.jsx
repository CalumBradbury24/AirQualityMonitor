import React from "react";
import "./Logo.styles.scss";
import Logo from '../../assets/Logo.jpg'

const AirLogo = () => (
  <span>
    <img className='logo' data-test='logo-test' src={Logo} alt="Logo" />
  </span>
);

export default AirLogo;
