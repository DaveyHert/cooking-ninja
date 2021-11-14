import { createContext, useReducer } from "react";
// Initialize context object
export const ThemeContext = createContext();

// Reducer function to manipulate state with dispatch actions
function themeReducer(state, action) {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };

    default:
      return state;
  }
}

//function to return privider to wrap children components
export function ThemeProvider({ children }) {
  const initialState = {
    color: "#58249c",
  };

  // initiate reducer
  const [state, dispatch] = useReducer(themeReducer, initialState);

  //   dispatch function to manipulate state in reducer function
  const changeColor = (newCol) =>
    dispatch({ type: "CHANGE_COLOR", payload: newCol });

  return (
    <ThemeContext.Provider value={{ ...state, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}
