import React from "react";
import logo from "./logo-small.png";
import { Link } from "react-router-dom";
// import "./Footer.scss";
import styled from "styled-components";

const index = () => {
  return (
    <Footer>
      <Link to="/">
        <img className="footer-logo-image" src={logo} alt="logo" />
      </Link>
      <br />
      &#xA9; 2023 Wealth Health
    </Footer>
  );
};

export default index;

const Footer = styled.div`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 14px;
  margin-top: 2rem;
  background-color: white;

  img {
    height: 35px;
    margin-right: 0.5rem;
  }
`;
