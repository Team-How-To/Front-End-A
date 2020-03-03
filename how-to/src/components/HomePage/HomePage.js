import React from "react";
import { ProtectedNavbar } from "../Navbars/ProtectedNavigation";
import SearchBar from "./SearchBar";
import { HowToList } from "./Cards/HowToList";

export const HomePage = () => {
  return (
    <div>
      <ProtectedNavbar />
      <SearchBar />
      <div>
        <HowToList />
      </div>
    </div>
  );
};
