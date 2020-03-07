import React from "react";
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
