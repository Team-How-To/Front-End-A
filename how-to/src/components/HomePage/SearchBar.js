import React from "react";
import styled from "styled-components";

const SearchForm = styled.form`
  text-align: center;
  margin: 2%;
  input {
    padding: 5px 20px;
    width: 60%;
  }
  button {
    padding: 5px;
    background: ${props => props.theme.secondaryColor};
  }
`;

const SearchBar = () => {
  return (
    <>
      <SearchForm>
        <input type="text" placeholder="Search Guides..." />
        <button>Search</button>
      </SearchForm>
    </>
  );
};

export default SearchBar;
