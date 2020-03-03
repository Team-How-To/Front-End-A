import React from 'react';
import Buttons from './Buttons';
import styled from "styled-components";

// Styles
const Card = styled.div`
  /* Main Card Styles */
  background: ${props => props.theme.primaryColor};
  text-align: center;
  color: ${props => props.theme.fontColorLight};
  width: 250px;
  padding: 20px;
  margin: 5%;

  /* Elements */
  h3 {
    margin: 5%;
  }

  button {
    background: ${props => props.theme.secondaryColor};
    padding: 5px;
    margin: 2%;
    color: ${props => props.theme.fontColorLight};
  }
`;

const GuideForm = ( {guide} ) => {

    return (
    <>
        <Card>
            <label>
                {guide.title}

                <div>
                    <Buttons state={guide.state}/>
                </div>
            </label>
            <div>
                {guide.image}
            </div>
            <p>
                {guide.content}
            </p>
        </Card>
    </>
    );
}

export default GuideForm;
