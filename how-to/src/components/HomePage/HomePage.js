import React, { useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { ProtectedNavbar } from "../Navbars/ProtectedNavigation";
import FormList from "./Cards/FormList";

export const HomePage = () => {
  useEffect(() => {
    axiosWithAuth()
      .get("/")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  });

  return (
    <div>
      <ProtectedNavbar />
      <FormList />
    </div>
  );
};
