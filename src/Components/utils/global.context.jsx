import React, { createContext, useReducer, useMemo, useEffect } from "react";
import { reducer, initialState } from "../../reducers/reducer";

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_DATA", payload: data });
      })
      .catch((error) => console.error("Error al buscar dentistas:", error));
  }, []);

  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: "SET_THEME", payload: newTheme });
  };

  const value = useMemo(() => ({ state, dispatch, toggleTheme }), [state, dispatch]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};