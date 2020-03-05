// eslint-disable-next-line
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Navigation as Navbar } from "../Navbars/Navigation";

// Styles
const LoginForm = styled.form`
  /* Main Form Styles */
  background-color: ${props => props.theme.primaryColor};
  width: 40%;
  margin: 10% auto;
  text-align: center;
  border-radius: 15px;
  padding-top: 1%;

  /* All Classes */
  .register-link {
    color: ${props => props.theme.fontColorLight};
    text-decoration: none;
  }

  .error-message {
    color: ${props => props.theme.error};
    display: block;
  }

  /* All Elements */

  h1 {
    color: ${props => props.theme.fontColorLight};
  }

  button {
    padding: 10px;
    margin: 4% 0;
    background: ${props => props.theme.secondaryColor};
  }

  div {
    color: ${props => props.theme.fontColorLight};
    margin: 5%;
    padding: 5%;

    label {
      margin-right: 2%;
    }

    input {
      padding: 1%;
      border-radius: 5px;
    }
  }
`;

export const LoginPage = props => {
  // State
  const [cred, setCred] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  // Handlers
  const handleChanges = e => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const submit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/users/login", cred)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(err => {
        console.log(err);
        setError("Invalid login, please try again");
      });
  };

  return (
    <div>
      <Navbar />
      <LoginForm onSubmit={submit}>
        <h1>Login</h1>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChanges}
          />
        </div>

        <button>Login</button>
        <div>
          <span className="error-message">{error}</span>
          <Link className="register-link" to="/signup">
            Not a user? Register here
          </Link>
        </div>
      </LoginForm>
    </div>
  );
};
