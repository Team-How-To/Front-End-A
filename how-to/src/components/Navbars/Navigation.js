import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/how-to_logo.png";
import styled from "styled-components";

// Styles
const LoginNavbar = styled.nav`
  display: flex;
  background: ${props => props.theme.primaryColor};

  /* Classes */
  .brand-name {
    text-decoration: none;
    font-size: 30px;
    color: ${props => props.theme.secondaryColor};
    width: 100%;
    margin-top: 1%;
    .logo {
      max-width: 80px;
    }
  }

  /* Elements */
  ul {
    display: flex;
    justify-content: flex-end;
    padding: 1%;
    width: 50%;
    list-style: none;

    li {
      margin: 2%;

      a {
        color: ${props => props.theme.fontColorLight};
        text-decoration: none;
      }
    }
  }
`;

export const Navigation = () => {
  return (
    <LoginNavbar>
      <Link className="brand-name" to="/">
        <img className="logo" src={logo}></img>
      </Link>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </LoginNavbar>
  );
};
