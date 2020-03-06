import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ProtectedNavbar } from "../../Navbars/ProtectedNavigation";
import styled from "styled-components";
import GuideCard from "../Cards/GuideCard";
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

export const CreateGuideForm = ( ) => {

    const { state } = useContext(GlobalState);
    const [newState, setNewState] = useState({})

    console.log('newstate: ', newState);
    console.log('state: ', state);




    const [guide, setGuide] = useState( {
      id: 0,
      title: '',
      ht_pic: null,
      Steps: '',
      likes: 0
    } );

    const [guides, setGuides] = useState([{ guide }]);

    const addNewGuide = guide => {
      const newGuide = {
        id: Date.now(),
        title: guide.title,
        Steps: guide.Steps
      };
  
      setGuides([...guides, newGuide]);
    };

  const handleChanges = event => {
    console.log("event", event.target.value);
    console.log("title", event.target.title);
    setGuide({ ...guide, [event.target.name]: event.target.value});
  };


  // console.log("guide", guide);


  const submitForm = event => {
    console.log("submitting!");
    event.preventDefault();
    addNewGuide(guide);
    setGuide({ title: '', ht_pic: null, id: 0, likes: 0, Steps: '' });
    setNewState(guide);
  };


  return (
    <>
      <ProtectedNavbar />
      <CreateFormStyle onSubmit={submitForm}>
        <div>
          <label htmlFor="title">
            <p>Title: </p>
            <input
              type="text"
              placeholder='Title...'
              id="title"
              name="title"
              value={guide.title}
              onChange={handleChanges}
            />
          </label>
        </div>

        <div>
          <label htmlFor="Steps">
            <p>Guide Steps: </p>
            <textarea
              id="Steps"
              name="Steps"
              placeholder="Add your guide steps here..."
              value={guide.Steps}
              onChange={handleChanges}
            />
          </label>
        </div>

        <section className='submitButton'>
            <button type='submit'>Add Guide</button>

            <Link to='/protected'>
                <button>Cancel</button>
            </Link>
        </section>

      </CreateFormStyle>


      {/* THIS CAN BE REMOVED ONCE THE DATA IS PUSHED TO STATE!!! */}
      <GuideCard guide={guide} title={guide.title} Steps={guide.Steps} />


    </>
  );
};

export default CreateGuideForm;