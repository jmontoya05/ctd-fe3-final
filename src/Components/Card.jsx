import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

const Card = ({ id, name, username }) => {
  const { state, toggleFavorite } = useContext(ContextGlobal);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const isAlreadyFav = state.favorites.some((fav) => fav.id === id);
    setIsFavorite(isAlreadyFav);
  }, [id, state.favorites]);

  const toggleFav = () => {
    const favorite = { id, name, username };
    const wasFavorite = isFavorite;

    toggleFavorite(favorite);

    setIsFavorite(!isFavorite);
    if (wasFavorite) {
      alert(`${name} fue eliminado de favoritos!`);
    } else {
      alert(`${name} fue agregado a favoritos!`);
    }
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <img
          src="./images/doctor.jpg"
          alt={`Doctor ${name}`}
          className="doctor-image"
        />
      </Link>
      <h3>
        <Link to={`/dentist/${id}`} className="doctor-name">
          {name}
        </Link>
      </h3>
      <p>{username}</p>
      <button onClick={toggleFav} className="favButton">
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default Card;