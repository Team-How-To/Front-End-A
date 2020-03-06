import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProtectedNavbar } from "../../Navbars/ProtectedNavigation";
import styled from "styled-components";

const EditFormStyles = styled.form`
  /* Main Form Styles */
  text-align: center;
  margin: 10%;

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
    width: 556px;
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

const initialItem = {
  id: "",
  title: ""
};

export const EditGuideForm = props => {
  const [guideInfo, setGuideInfo] = useState({ initialItem });

  const changeHandler = e => {
    console.log(guideInfo);
    setGuideInfo({
      ...guideInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = Number(props.match.params.id);
    props.updateGuide(id, guideInfo);
  };

  return (
    <>
      <ProtectedNavbar />
      <section>
        <EditFormStyles onSubmit={handleSubmit}>
          <div>
            <label>
              <p>Title:</p>
              <input
                type="text"
                name="title"
                placeholder="Edit Title..."
                value={guideInfo.title}
                onChange={changeHandler}
              />
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
            <button type="submit" to="/protected">
              Submit Changes
            </button>

            <Link to="/protected">
              <button>Cancel</button>
            </Link>
          </section>
        </EditFormStyles>
      </section>
    </>
  );
};
