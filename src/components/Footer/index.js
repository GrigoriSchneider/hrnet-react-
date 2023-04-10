import React from "react";
import logo from "./logo-small.png";
import { Link } from "react-router-dom";
import "./Footer.scss";

const index = () => {
  return (
    <div className="footer">
      <Link to="/">
        <img className="footer-logo-image" src={logo} alt="logo" />
      </Link>
      <br />
      &#xA9; 2023 Wealth Health
    </div>
  );
};

export default index;
