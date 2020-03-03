import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  howTo: [
    {
      title: "Simple Survival",
      steps: "1. Eat Food 2. Drink Water 3. Clean Yourself 4. Repeat",
      user_id: Date.now()
    }
  ]
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        howTo: state.howTo
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
