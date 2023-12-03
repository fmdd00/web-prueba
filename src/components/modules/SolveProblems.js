//import React from "react";
import BarLog from "../bar/BarLog";
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from "react";
import ProblemasList from "./ProblemasList";
import { Button } from "react-bootstrap";
import BarLogConcursante from "../bar/BarLogConcursante";
const SolveProblems = () => {
  

  return (
    <div>
      <BarLogConcursante />
      <div className="container mt-4">
        <h1 className="text-left" style={{ color: "#800080" }}>
          Problema A 
        </h1>

        <h2 className="text-left" style={{ color: "#800080" }}>
          Caso
        </h2>

  <div className="container mt-4 border rounded p-4">
    <p>Asegúrate de que estás iniciando tu aplicación de la manera correcta, utilizando el comando proporcionado por Create React App. Normalmente, esto es npm start. Durante la ejecución de este comando, las variables de entorno definidas en tu archivo .env deberían cargarse automáticamente.</p>
  </div>
  <h2 className="text-left" style={{ color: "#800080" }}>
          Solucion
        </h2>
  <div className="container mt-4 border rounded p-4">
    <p>Asegúrate de que estás iniciando tu aplicación de la manera correcta, utilizando el comando proporcionado por Create React App. Normalmente, esto es npm start. Durante la ejecución de este comando, las variables de entorno definidas en tu archivo .env deberían cargarse automáticamente.</p>
    </div>  
  <div className="container rounded p-4 d-flex justify-content-center align-items-center">
                <Button
                  variant="outline-light"
                  style={{
                    borderColor: "#800080",
                    textDecoration: "none",
                    color: "#800080"
                  }}
                >
                  Subir solución ➜
                </Button>
                </div>
              </div>
    </div>
  );
};

export default SolveProblems;
