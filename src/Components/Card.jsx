import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ id, name, username, onRemoveFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadyFav = favs.some((fav) => fav.id === id);
    setIsFavorite(isAlreadyFav);
  }, [id]);

  const toggleFav = () => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadyFav = favs.find((fav) => fav.id === id);

    if (!isAlreadyFav) {
      const newFav = { id, name, username };
      favs.push(newFav);
      localStorage.setItem("favorites", JSON.stringify(favs));
      setIsFavorite(true);
      alert(`${name} fue agregado a favoritos!`);
    } else {
      const updatedFavs = favs.filter((fav) => fav.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavs));
      setIsFavorite(false);
      alert(`${name} fue eliminado de favoritos!`);
      
      if (onRemoveFavorite) {
        onRemoveFavorite(id);
      }
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
