import React from "react";
// import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { ProtectedNavbar } from "../Navbars/ProtectedNavigation";
import GuideList from "./Cards/GuideList";

export const HomePage = () => {

    
  return (
    <div>
      <ProtectedNavbar />
      <GuideList />
    </div>
  );
};
