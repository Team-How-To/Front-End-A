import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { ProtectedNavbar } from "../Navbars/ProtectedNavigation";
import GuideList from "./Cards/GuideList";
import GuideCard from "./Cards/GuideCard";

export const HomePage = () => {
  return (
    <div>
      <ProtectedNavbar />
      <GuideList />
    </div>
  );
};
