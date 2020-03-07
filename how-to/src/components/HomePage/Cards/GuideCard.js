import React, { useContext } from "react";
import Buttons from "./Buttons";
import styled from "styled-components";
import { GlobalState } from "../../../context/GlobalState";

// Styles
const SectionCardStyle = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
`;
const Card = styled.form`
  /* Main Card Styles */
  background: ${props => props.theme.primaryColor};
  text-align: center;
  color: ${props => props.theme.fontColorLight};

  width: 45%;

  padding: 3%;
  margin: 2%;

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

  p {
    margin: 5%;
  }
`;

const GuideCard = props => {
  const { deleteGuide } = useContext(GlobalState);

  return (
    <SectionCardStyle>
      <Card>
        <div>
          <h1>{props.guide.title}</h1>
          <p>{props.guide.Steps}</p>
          <div>
            <Buttons
              state={props.guide}
              key={props.guide.id}
              deleteGuide={deleteGuide}
              props={props}
            />
          </div>
        </div>
      </Card>
    </SectionCardStyle>
  );
};

export default GuideCard;
