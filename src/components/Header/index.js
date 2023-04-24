import React from "react";
import styled from "styled-components";

import logo from "./logo.png";
import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <Nav>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <h1>HRnet</h1>

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
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-top: 1rem;
  background-color: white;

  img {
    height: 80px;
    object-fit: cover;
  }

  h1 {
    font-size: 36px;
    color: #6d7e1e;
  }

  .button {
    background-color: #6d7e1e;
    color: #ffffff;
    padding: 0.7rem;
    border-radius: 5px;
    font-family: "Montserrat", "Roboto", sans-serif;
    font-size: 18px;
    span {
      margin-left: 0.6rem;
    }
  }
`;
