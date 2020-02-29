import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styles
const Navbar = styled.nav`
  display: flex;
  background: ${props => props.theme.primaryColor};

  .brand-name {
    padding: 1%;
    text-decoration: none;
    font-size: 30px;
    color: ${props => props.theme.secondaryColor};
    width: 100%;
  }

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
      <Link className="brand-name" to="/">
        How To
      </Link>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </Navbar>
  );
};
