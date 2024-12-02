import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setDentist(data))
      .catch((error) => console.error("Error buscando los detalles del dentista:", error));
  }, [id]);

  return (
    <>
      <h1>Detalles del Dentista</h1>
      {dentist ? (
        <table className="dentist-details-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo Electrónico</th>
              <th>Teléfono</th>
              <th>Sitio Web</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>
                <a href={`https://${dentist.website}`} target="_blank" rel="noopener noreferrer">
                  {dentist.website}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

export default Detail;
