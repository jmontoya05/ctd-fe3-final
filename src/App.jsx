import React, { useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dentist/:id" element={<Detail />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


