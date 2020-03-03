import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProtectedNavbar } from '../../Navbars/ProtectedNavigation';
import styled from "styled-components";


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

    const [guide] = useState(
        {
            id: '',
            state: {
                likes: 0,
                up_vote: 0,
                down_vote: 0
            },
            title: '',
            image: '',
            content: ''
        });

    console.log('title: ', guide.title);

    return(
        <>
            <ProtectedNavbar />

            <section>
                <CreateFormStyle>
                    <div>
                        <label>
                            <p>
                                Title:
                            </p>
                            <input 
                                type='text'
                                name='title'
                                placeholder='Add Title...'
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            <p>
                                Image:
                            </p>
                            <input 
                                className='imageInput'
                                type='text'
                                name='image'
                                placeholder='Add Image...'
                            />
                            <button>Add File</button>
                        </label>
                    </div>
                    
                    <div>
                        <label>
                            <p>
                                Guide:
                            </p>
                            <textarea 
                                type='text'
                                name='content'
                                placeholder='Add Guide Steps...'
                            />
                        </label>
                    </div>

                    <section className='submitButton'>
                        <button>Submit</button>

                        <Link to='/protected'>
                            <button>Cancel</button>
                        </Link>
                    </section>
                </CreateFormStyle>
            </section>

        </>
    )
}