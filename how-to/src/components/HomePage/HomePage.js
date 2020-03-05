import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { ProtectedNavbar } from "../Navbars/ProtectedNavigation";
import FormList from "./Cards/FormList";

export const HomePage = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("api/howto")
      .then(res => {
        setState(res.data);
      })
      .catch(err => console.log(err));
  });

  return (
    <div>
      <ProtectedNavbar />
      <FormList data={state} />
    </div>
  );
};
