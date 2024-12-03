import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <>
      <h1>Odontólogos Favoritos</h1>
      <div className="card-grid">
        {state.favorites.length > 0 ? (
          state.favorites.map((fav) => (
            <Card
              key={fav.id}
              id={fav.id}
              name={fav.name}
              username={fav.username}
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
