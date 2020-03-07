// eslint-disable-next-line
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ProtectedNavbar } from "../../Navbars/ProtectedNavigation";
import styled from "styled-components";
import { GlobalState } from "../../../context/GlobalState";

const EditFormStyles = styled.form`
  /* Main Form Styles */
  text-align: center;

  margin: 2%;

  /* Elements */
  input {
    padding: 5px 20px;
    width: 60%;
  }

  label {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    width: 1020px;
  }

  .imageInput {
    width: 523px;
  }

  p {
    padding: 1.5%;
    width: 79.5px;
  }

  textarea {
    width: 612px;
    height: 150px;
  }

  button {
    padding: 5px;
    background: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.fontColorLight};
  }

  .submitButton {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
`;

export const EditGuideForm = () => {
  const { state } = useContext(GlobalState);

  console.log("Edited State: ", state);

  return (
    <>
      <ProtectedNavbar />
      <section>
        <EditFormStyles>
          <div>
            <label>
              <p>Title:</p>
              <input type="text" name="title" placeholder="Edit Title..." />
            </label>
          </div>

          <div>
            <label>
              <p>Image:</p>
              <input
                className="imageInput"
                type="text"
                name="image"
                placeholder="Edit Image..."
              />
              {/* <input type="file" placeholder="Add Image" /> */}
              <button>Change image</button>
            </label>
          </div>

          <div>
            <label>
              <p>Guide:</p>
              <textarea
                type="text"
                name="content"
                placeholder="Edit Guide Steps..."
              />
            </label>
          </div>

          <section className="submitButton">
            <button to="/">Submit Changes</button>

            <Link to="/protected">
              <button>Cancel</button>
            </Link>
          </section>
        </EditFormStyles>
      </section>
    </>
  );
};
