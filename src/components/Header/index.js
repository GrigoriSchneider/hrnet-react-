import React from "react";

import logo from "./logo.png";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <nav className="main-nav">
      <Link to="/">
        <img className="main-nav-logo-image" src={logo} alt="logo" />
      </Link>
      <h1 className="main-nav-h1">HRnet</h1>

      {location.pathname === "/employeelist" ? (
        <Link to="/" className="button">
          <FontAwesomeIcon icon={faUserPlus} />
          <span>Add employee</span>
        </Link>
      ) : (
        <Link to="/employeelist" className="button">
          <FontAwesomeIcon icon={faUser} />
          <span>Employee List</span>
        </Link>
      )}
    </nav>
  );
};

export default Header;
