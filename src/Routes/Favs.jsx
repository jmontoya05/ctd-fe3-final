import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavs);
  }, []);

  const handleRemoveFavorite = (id) => {
    const updatedFavs = favorites.filter((fav) => fav.id !== id);
    setFavorites(updatedFavs);
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
  };

  return (
    <>
      <h1>Odontólogos Favoritos</h1>
      <div className="card-grid">
        {favorites.length > 0 ? (
          favorites.map((fav) => (
            <Card
              key={fav.id}
              id={fav.id}
              name={fav.name}
              username={fav.username}
              onRemoveFavorite={handleRemoveFavorite}
            />
          ))
        ) : (
          <p>Aún no se han agregado favoritos</p>
        )}
      </div>
    </>
  );
};

export default Favs;
