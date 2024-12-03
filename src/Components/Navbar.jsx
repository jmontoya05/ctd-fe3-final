import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

const Navbar = () => {
  const { state, toggleTheme } = useContext(ContextGlobal);

  return (
    <nav>
      <Link to="/">
      <div className="navbar-logo-container">
        <img src="/images/DH.png" alt="Logo" className="logo" />
      </div>
      </Link>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/favs">Favoritos</Link>
        <Link to="/contact">Contacto</Link>
      </div>
      <button onClick={toggleTheme}>
        Cambiar tema {state.theme === "light" ? "🌑" : "🌕"}
      </button>
    </nav>
  );
};

export default Navbar;

