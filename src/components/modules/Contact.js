import React from "react";
import { Bar } from "../bar/Bar";

const Contact = () => {
  return (
    <div>
      <Bar />
      <div className="container mt-4 mb-4">
        <h1 className="text-left" style={{ color: "#800080" }}>
          Información de contacto
        </h1>
      </div>
      <div className="container col-6 mt-4">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>GitHub</th>
              <th>Correo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Javier Olazabal</td>
              <td>ItsJavito</td>
              <td>@aloe.ulima.edu.pe</td>
            </tr>
            <tr>
              <td>Lelis Atencia</td>
              <td>atencia22</td>
              <td>@aloe.ulima.edu.pe</td>
            </tr>
            <tr>
              <td>Angel Cuya</td>
              <td>galadto</td>
              <td>@aloe.ulima.edu.pe</td>
            </tr>
            <tr>
              <td>Francisco Díaz</td>
              <td>fmdd00</td>
              <td>20180593@aloe.ulima.edu.pe</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
