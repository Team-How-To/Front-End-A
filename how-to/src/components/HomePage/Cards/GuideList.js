import React, { useState, useContext, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import GuideCard from "./GuideCard";
import { GlobalState } from "../../../context/GlobalState";
// import CreateGuideCard from '../SearchBar/CreateGuideCard';

const GuideList = () => {
  const { state } = useContext(GlobalState);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(state);

  useEffect(() => {
    const results = state.filter(guideCards => {
      return guideCards.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  }, [searchTerm, state]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        handleChange={handleChange}
        searchResults={searchResults}
        handleSubmit={handleSubmit}
      />

      {searchResults.map(guide => {
        return <GuideCard guide={guide} key={guide.id} />;
      })}
    </>
  );
};

export default GuideList;
