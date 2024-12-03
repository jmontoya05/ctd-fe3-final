import React, { useEffect, useContext } from "react";
import Navbar from "./Components/Navbar";
import AppRoutes from "./Routes/AppRoutes";
import Footer from "./Components/Footer";
import { ContextGlobal } from "./Components/utils/global.context";

function App() {
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    document.body.className = state.theme;
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  const toggleTheme = () => {
    const newTheme = state.theme === "dark" ? "light" : "dark";
    dispatch({ type: "SET_THEME", payload: newTheme });
  };

  return (
    <div className="App">
      <Navbar toggleTheme={toggleTheme} />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;


