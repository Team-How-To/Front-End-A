import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styles
const SearchFormStyle = styled.form`
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


const SearchBar = ( guideProps ) => {


  return (
    <>
      <section>
        <div>

            <SearchFormStyle onSubmit={guideProps.handleSubmit}>

            <label htmlFor="name">Search: </label>
            <input
              id="id"
              type="text"
              name="name"
              placeholder="Search Guides..."

              value={guideProps.searchTerm}
              onChange={guideProps.handleChange}
            />
            <Link to="/create_guide">
              <button type='button'>Add New How-To</button>

            </Link>
          </SearchFormStyle>
        </div>
      </section>
    </>
  );
};

export default SearchBar;

