import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../Images/how-to_logo.png";

// Styles
const Navbar = styled.nav`
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

export const ProtectedNavbar = () => {
  return (
    <Navbar>
      <Link className="brand-name" to="/protected">
        <img className="logo" src={logo} alt='Site Logo' />
      </Link>
      <ul>
        <li>
          <Link to="/protected">Home</Link>
        </li>
        <li>
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </Navbar>
  );
};
