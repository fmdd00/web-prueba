import React from "react";
import { Bar } from "../bar/Bar";
import { Link } from "react-router-dom";

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
              <th>GitHub (Links)</th>
              <th>Correo (Ulima)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Javier Olazabal</td>
              <td><Link className="fw-bold" style={{ textDecoration:"none", color:"#800080" }} to="https://github.com/ItsJavito">ItsJavito</Link></td>
              <td>20191425@aloe.ulima.edu.pe</td>
            </tr>
            <tr>
              <td>Lelis Atencia</td>
              <td><Link className="fw-bold" style={{ textDecoration:"none", color:"#800080" }} to="https://github.com/atencia22">atencia22</Link></td>
              <td>20190175@aloe.ulima.edu.pe</td>
            </tr>
            <tr>
              <td>Angel Cuya</td>
              <td><Link className="fw-bold" style={{ textDecoration:"none", color:"#800080" }} to="https://github.com/galadto">galadto</Link></td>
              <td>20184660@aloe.ulima.edu.pe</td>
            </tr>
            <tr>
              <td>Francisco Díaz</td>
              <td><Link className="fw-bold" style={{ textDecoration:"none", color:"#800080" }} to="https://github.com/fmdd00">fmdd00</Link></td>
              <td>20180593@aloe.ulima.edu.pe</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
