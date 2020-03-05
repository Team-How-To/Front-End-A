import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Navigation as Navbar } from "../Navbars/Navigation";

// Styles
const SignupForm = styled.form`
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
      width: 50%;
    }
  }
`;

export const Signup = props => {
  // State
  const [cred, setCred] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    location: "",
    user_type: Date.now()
  });

  const [error, setError] = useState("");

  // Handlers
  const handleChanges = e => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const submit = e => {
    e.preventDefault();
    e.preventDefault();
    axiosWithAuth()
      .post("/api/users/register", cred)
      .then(res => {
        setCred(res);
        props.history.push("/");
      })
      .catch(err => {
        console.log(err);
        setError("Enter Required Field(s)");
      });
  };
  return (
    <div>
      <Navbar />
      <SignupForm onSubmit={submit}>
        <h1>Signup</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={handleChanges} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChanges}
          />
        </div>
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
        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            onChange={handleChanges}
          />
        </div>

        <button>Signup</button>
        <div>
          <span className="error-message">{error}</span>
          <Link className="register-link" to="/">
            Aleady a user? Login here
          </Link>
        </div>
      </SignupForm>
    </div>
  );
};
