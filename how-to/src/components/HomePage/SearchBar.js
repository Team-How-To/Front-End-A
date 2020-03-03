import React from "react";
import styled from "styled-components";

// Styles
const SearchForm = styled.form`
  /* Main Form Styles */
  text-align: center;
  margin: 2%;

  /* Elements */
  input {
    padding: 5px 20px;
    width: 60%;
  }
  button {
    padding: 5px;
    background: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.fontColorLight};
  }
`;

const SearchBar = () => {
  return (
    <>
      <SearchForm>
        <input type="text" placeholder="Search Guides..." />
        <button>Search</button>
        {/* Eventually will link to add card form */}
        <button>Add New How-To</button>
      </SearchForm>
    </>
  );
};

export default SearchBar;
