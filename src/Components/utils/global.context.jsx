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

  const toggleFavorite = (favorite) => {
    const isFavorite = state.favorites.find((fav) => fav.id === favorite.id);
    if (isFavorite) {
      dispatch({ type: "REMOVE_FAVORITE", payload: favorite });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: favorite });
    }
  };

  const value = useMemo(() => ({
    state,
    dispatch,
    toggleTheme,
    toggleFavorite,
  }), [state, dispatch]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};
