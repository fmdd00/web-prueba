import React from "react";
import BarLog from "../bar/BarLog";
import BarLogConcursante from "../bar/BarLogConcursante";
const Leaderboard = () => {
  return (
    <div>
      <BarLogConcursante />
      <div className="container mt-4">
        <h1 className="text-left" style={{ color: "#800080" }}>
          Tabla de clasificaciones
        </h1>
      </div>
      <div className="container col-6 mt-4">
        {/*Se tendría que hacer un map o un for a la BD para que pinte cada entrada o fila en la tabla*/}
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Puntaje</th>
              <th>Preguntas resueltas</th>
              <th>País</th>
              <th>Institución</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Javier Olazabal</td>
              <td>4000</td>
              <td>17</td>
              <td>Perú</td>
              <td>Ulima</td>
            </tr>
            {/*No sería necesario crear cada row a mano, solo habría que mapear para que con cada entrada se cree un nuevo row*/}
            <tr>
              <td>Javier Olazabal</td>
              <td>4000</td>
              <td>17</td>
              <td>Perú</td>
              <td>Ulima</td>
            </tr>
            <tr>
              <td>Javier Olazabal</td>
              <td>4000</td>
              <td>17</td>
              <td>Perú</td>
              <td>Ulima</td>
            </tr>
            <tr>
              <td>Javier Olazabal</td>
              <td>4000</td>
              <td>17</td>
              <td>Perú</td>
              <td>Ulima</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
