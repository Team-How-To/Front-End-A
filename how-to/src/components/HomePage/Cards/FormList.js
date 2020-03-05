import React, { useState, useEffect } from "react";
import SearchForm from "../SearchBar/SearchBar";

const FormList = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    {
      data.map(guideForm => console.log(guideForm));
      console.log("Formlist", searchResults);
    }
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <section>
        <div>
          <SearchForm
            searchTerm={searchTerm}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            searchResults={searchResults}
          />
        </div>
      </section>
    </>
  );
};

export default FormList;
