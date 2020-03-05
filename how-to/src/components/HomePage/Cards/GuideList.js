import React, { useState, useContext } from "react";
import SearchForm from "../SearchBar/SearchBar";
import GuideCard from "./GuideCard";
import { GlobalState } from "../../../context/GlobalState";

const FormList = () => {
  const { state } = useContext(GlobalState);
  return (
    <>
      <SearchForm />
      {state.map(guide => {
        return <GuideCard guide={guide} key={guide.id} />;
      })}
    </>
  );
};

export default FormList;
