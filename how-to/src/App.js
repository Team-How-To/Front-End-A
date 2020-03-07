import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { Signup } from "./components/SignupPage/SignupPage";
import { HomePage as Home } from "./components/HomePage/HomePage";
import { CreateGuide } from "./components/HomePage/SearchBar/CreateGuide";
import { EditGuideForm } from "./components/HomePage/Cards/EditGuideForm";
import ProtectedRoute from "./utils/ProtectedRoute";
import styled from "styled-components";
import { GlobalState } from "./context/GlobalState";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import "./App.css";

const Div = styled.div`
  font-family: ${props => props.theme.fontFamily};
`;

function App(props) {
  const [state, setState] = useState([]);
  const [userId] = useState({
    user_id: localStorage.userid
  });

  useEffect(() => {
    axiosWithAuth()
      .get("/api/howto")
      .then(res => {
        setState(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const deleteGuide = (id, userId) => {
    console.log("id: ", id);
    console.log("User ID: ", userId);
    axiosWithAuth()
      .delete(`/api/howto/delete/${id}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log("Delete Guide Error: ", err);
      });
  };

  return (
    <GlobalState.Provider value={{ state, deleteGuide }}>
      <Div className="App">
        <Switch>
          <ProtectedRoute exact path="/protected" component={Home} />
          <Route exact path="/" component={LoginPage} />
          <Route path="/signup" component={Signup} />
          <Route
            path="/create_guide"
            exact
            component={props => (
              <CreateGuide state={state} userId={userId} props={props} />
            )}
          />
          <Route path="/edit_card" component={EditGuideForm} />
        </Switch>
      </Div>
    </GlobalState.Provider>
  );
}

export default App;
