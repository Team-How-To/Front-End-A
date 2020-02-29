import React from "react";
import { ProtectedNavbar } from "../Navbars/ProtectedNavigation";
import SearchBar from "./SearchBar";

export const HomePage = () => {
  return (
    <div>
      <ProtectedNavbar />
      <SearchBar />
    </div>
  );
};
