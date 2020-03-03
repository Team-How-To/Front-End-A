import React from "react";
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

export const HowToCard = ({ data }) => {
  return (
    <Card>
      <h3>{data.title}</h3>
      <p>{data.steps}</p>
      <button>Edit</button>
      <button>Delete</button>
    </Card>
  );
};
