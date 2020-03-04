import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GuideCard from "./Cards/GuideCard";

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

const SectionCardStyle = styled.section`
  .guideCards {
    display: flex;
    justify-content: space-evenly;
    align-content: center;
  }
`;

const SearchForm = props => {
  return (
    <>
      <section>
        <div>
          <SearchFormStyle onSubmit={props.handleSubmit}>
            <label htmlFor="name">Search: </label>
            <input
              id="id"
              type="text"
              name="name"
              placeholder="Search Guides..."
              value={props.searchTerm}
              onChange={props.handleChange}
            />
            <Link to="/create_guide">
              <button>Add New How-To</button>
            </Link>
          </SearchFormStyle>
          <SectionCardStyle>
            <div className="guideCards">
              {props.searchResults.map(guide => {
                return <GuideCard guide={guide} key={guide.id} />;
              })}
            </div>
          </SectionCardStyle>
        </div>
      </section>
    </>
  );
};

export default SearchForm;
