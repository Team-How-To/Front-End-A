import React, { useState, useEffect } from "react";
import SearchForm from "../SearchBar/SearchBar";
import GuideCard from "./GuideCard";

const FormList = ({ data }) => {
  return (
    <>
      <SearchForm />
      {data.map(guide => {
        return <GuideCard guides={guide} />;
      })}
    </>
  );
};

export default FormList;
