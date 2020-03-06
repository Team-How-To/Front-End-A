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

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/howto")
      .then(res => {
        setState(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <GlobalState.Provider value={{ state }}>
      <Div className="App">
        <Switch>
          <ProtectedRoute exact path="/protected" component={Home} />
          <Route exact path="/" component={LoginPage} />
          <Route path="/signup" component={Signup} />
          <Route
            path="/create_guide"
            exact
            component={props => <CreateGuide state={state} />}
          />
          <Route path="/edit_card" component={EditGuideForm} />
        </Switch>
      </Div>
    </GlobalState.Provider>
  );
}

export default App;
