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
  const [guide, setGuide] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("api/howto")
      .then(res => {
        setState(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const updateGuide = (id, guide) => {
    axiosWithAuth()
      .put(`api/howto/edithowto/${id}`, guide)
      .then(response => {
        console.log(response);
        /* const updatedGuide = response.data;
        console.log("Updated", response);
        const newGuide = state.map(guide => {
          if (guide.id !== updatedGuide.id) { 
            return guide;
          }
          return updatedGuide;
        });
        setState(newGuide);
        props.history.push(`/protected`);
        */
      })
      .catch(err => console.log(err));
  };
  return (
    <GlobalState.Provider value={{ state }}>
      <Div className="App">
        <Switch>
          <ProtectedRoute exact path="/protected" component={Home} />
          <Route exact path="/" component={LoginPage} />
          <Route path="/signup" component={Signup} />
          <Route path="/create_guide" exact component={CreateGuide} />
          <Route
            path="/edit_card"
            render={props => (
              <EditGuideForm {...props} updateGuide={updateGuide} />
            )}
          />
        </Switch>
      </Div>
    </GlobalState.Provider>
  );
}

export default App;
