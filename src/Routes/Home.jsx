import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setDentists(data))
      .catch((error) => console.error("Error al buscar dentistas:", error));
  }, []);

  return (
    <main className="home">
      <h1>Home</h1>
      <div className="card-grid">
        {dentists.map((dentist) => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
