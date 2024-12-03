import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Importa Link para navegación
import { ContextGlobal } from "../Components/utils/global.context";

const Navbar = () => {
  const { state, toggleTheme } = useContext(ContextGlobal);

  return (
    <nav>
      <Link to="/">
        <img src="/images/DH.png" alt="Logo" className="logo" />
      </Link>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/favs">Favoritos</Link>
        <Link to="/contact">Contacto</Link>
      </div>
      <button onClick={toggleTheme}>
        Cambiar a tema {state.theme === "light" ? "oscuro" : "claro"}
      </button>
    </nav>
  );
};

export default Navbar;

