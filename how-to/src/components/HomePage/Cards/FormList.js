import React, { useState, useEffect } from "react";
import SearchForm from "../SearchBar/SearchBar";

const guide = [
  {
    id: "1",
    state: {
      likes: 0,
      up_vote: 0,
      down_vote: 0
    },
    title: "Make Bread",
    image: "image here",
    content: "THIS IS TEST STEP 1!!!!"
  },
  {
    id: "2",
    state: {
      likes: 0,
      up_vote: 0,
      down_vote: 0
    },
    title: "How to brush your teeth",
    image: "image here",
    content: "THIS IS TEST STEP 2!!!!"
  },
  {
    id: "3",
    state: {
      likes: 0,
      up_vote: 0,
      down_vote: 0
    },
    title: "How to whistle",
    image: "image here",
    content: "THIS IS TEST STEP 3!!!!"
  }
];

const FormList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(guide);

  useEffect(() => {
    const results = guide.filter(guideForms => {
      return guideForms.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
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
