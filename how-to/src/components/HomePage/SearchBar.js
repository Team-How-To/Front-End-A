// import React from "react";


// const SearchBar = () => {
//   return (
//     <>
//       <SearchForm>
//         <input type="text" placeholder="Search Guides..." />
//         <button>Search</button>
//         {/* Eventually will link to add card form */}
//         
//       </SearchForm>
//     </>
//   );
// };

// export default SearchBar;


import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import GuideForm from './Cards/GuideForm';

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


const SearchForm = ( props ) => {

    return (
        <>
            <section>
                <div>
                    <SearchFormStyle onSubmit={props.handleSubmit}>
                        <label htmlFor="name">Search: </label>
                        <input
                            id='id'
                            type="text"
                            name="name"
                            placeholder="Search Guides..."
                            value={props.searchTerm}
                            onChange={props.handleChange}
                        />
                        <Link to='/create_guide'>
                          <button>Add New How-To</button>
                        </Link>
                    </SearchFormStyle>
                    <section>
                        <>
                            {props.searchResults.map(guide => {
                                return <GuideForm guide={guide} key={guide.id}/>;
                            })}
                        </>
                    </section>
                </div>
            </section>
        </>
    );
}

export default SearchForm;