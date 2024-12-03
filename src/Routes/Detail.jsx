import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);

  const dentist = state.data ? state.data.find((dentist) => dentist.id === parseInt(id)) : null;

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