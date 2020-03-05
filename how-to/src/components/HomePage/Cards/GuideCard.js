import React from "react";
import Buttons from "./Buttons";
import styled from "styled-components";

// Styles
const Card = styled.form`
  /* Main Card Styles */
  background: ${props => props.theme.primaryColor};
  text-align: center;
  color: ${props => props.theme.fontColorLight};
  width: 400px;
  padding: 3%;

  /* Elements */
  h1 {
    margin: 5%;
  }

  button {
    background: ${props => props.theme.secondaryColor};
    padding: 5px;
    margin: 2%;
    color: ${props => props.theme.fontColorLight};
  }
`;

const GuideCard = ({ guide }) => {
  return (
    <>
      <Card>
        <div>
          <h1>
            {guide.title}

            <div>
              <Buttons />
            </div>
          </h1>
        </div>
      </Card>
    </>
  );
};

export default GuideCard;
