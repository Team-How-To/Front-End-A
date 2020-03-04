import React from "react";
import { ProtectedNavbar } from "../Navbars/ProtectedNavigation";
// import SearchBar from "./SearchBar";
// import { HowToList } from "./Cards/HowToList";
import FormList from "./Cards/FormList";

export const HomePage = () => {
  return (
    <div>
      <ProtectedNavbar />
      <FormList />
    </div>
  );
};
