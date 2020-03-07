import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProtectedNavbar } from "../../Navbars/ProtectedNavigation";
import styled from "styled-components";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";

const CreateFormStyle = styled.form`
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

export const CreateGuide = props => {
  console.log("props.state: ", props.state);
  const [state, setState] = useState(props.state);

  const [newGuide, setNewGuide] = useState({
    title: "",
    steps: "",
    ht_pic: null,
    user_id: props.userId.user_id
  });

  console.log("newGuide: ", newGuide);

  const handleChanges = e => {
    setNewGuide({
      ...newGuide,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/howto/newhowto", newGuide)
      .then(res => {
        setState({ ...state, newGuide });
        props.props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <ProtectedNavbar />
      <CreateFormStyle onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">
            <p>Title: </p>
            <input
              type="text"
              placeholder="Title..."
              id="title"
              name="title"
              value={newGuide.title}
              onChange={handleChanges}
            />
          </label>
        </div>

        <label htmlFor="ht_pic">
          <p>Image:</p>
          <input
            className="imageInput"
            type="text"
            placeholder="Add Image..."
            id="ht_pic"
            name="ht_pic"
            value={newGuide.ht_pic}
            onChange={handleChanges}
          />
          <button>Add File</button>
        </label>

        <div>
          <label htmlFor="Steps">
            <p>Guide Steps: </p>
            <textarea
              id="Steps"
              name="steps"
              placeholder="Add your guide steps here..."
              value={newGuide.steps}
              onChange={handleChanges}
            />
          </label>
        </div>

        <section className="submitButton">
          <button type="submit">Add Guide</button>

          <Link to="/protected">
            <button>Cancel</button>
          </Link>
        </section>
      </CreateFormStyle>
    </>
  );
};

export default CreateGuide;
