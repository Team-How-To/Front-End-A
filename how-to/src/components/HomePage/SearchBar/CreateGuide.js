
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ProtectedNavbar } from "../../Navbars/ProtectedNavigation";
import styled from "styled-components";
import { GlobalState } from "../../../context/GlobalState";


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

export const CreateGuide = () => {


    const { state } = useContext(GlobalState);

    console.log('state: ', state);

    const [guide, setGuide] = useState({
        id: 0,
        likes: 0,
        title: "",
        ht_pic: null,
        Steps: "",
        user_id: 0
    });




  return (
    <>
        <ProtectedNavbar />
        <section>
            <CreateFormStyle>
                <div>
                    <label>
                        <p>Title:</p>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="Add Title..."
                            // value={setGuide(guide.title)}
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
                        placeholder="Add Image..."
                    />
                    <button>Add File</button>
                </label>
                </div>

                <div>
                <label>
                    <p>Guide:</p>
                    <textarea
                        type="text"
                        name="content"
                        placeholder="Add Guide Steps..."
                    />
                </label>
                </div>

                <section className="submitButton">
                    <button>Submit</button>

                    <Link to="/protected">
                        <button>Cancel</button>
                    </Link>
                </section>
            </CreateFormStyle>
        </section>

    </>
  );
};
