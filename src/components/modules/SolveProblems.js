//import React from "react";
import BarLog from "../bar/BarLog";

import React, { useEffect, useState } from "react";


import { Button } from "react-bootstrap";
import BarLogConcursante from "../bar/BarLogConcursante";

import { useParams, useNavigate } from 'react-router-dom';

const SolveProblems = () => {
    const { problemaId } = useParams();
    const [inputValue, setInputValue] = useState('');

    const [solucionSubida, setSolucionSubida] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
      setInputValue(e.target.value);
    };

  const handleUploadSolution = () => {
    // Aquí puedes agregar la lógica para manejar la subida de la solución
    console.log("Subir solución:", inputValue);
    // Lógica adicional aquí, como enviar la solución al servidor

    // Establece el estado para indicar que se ha subido la solución
    setSolucionSubida(true);
  };
  
  useEffect(() => {
    // Redirigir solo si solucionSubida es verdadero
    if (solucionSubida) {
      navigate('/problemasConcursante', { state: { solucionSubida: true } });
    }
  }, [solucionSubida, navigate]);
    
    const containerStyle = {
      width: '100%',
      minHeight: '450px', // Altura mínima del contenedor
    };
  return (
    <div>
      <BarLog />
      <div className="container mt-4">
        <h1 className="text-left" style={{ color: "#800080" }}>
          Problema A 
        </h1>

        <h2 className="text-left" style={{ color: "#800080" }}>
          Caso
        </h2>

  <div className="container mt-4 border rounded p-4">
    <h1>{ problemaId }</h1>
    </div>
  <h2 className="text-left" style={{ color: "#800080" }}>
          Solucion
        </h2>
  <div className="container mt-4 border rounded p-4" style={containerStyle}>
  <textarea
        
        id="miInput"
        placeholder="Escribe aquí..."
        value={inputValue}
        style={{
          border: 'none',
          outline: 'none',
          fontSize: '15px',
          width: '100%',
          minHeight: '500px',
          resize: 'none', 
          }}
        
        onChange={handleChange}
        
      />
    </div>  
  <div className="container rounded p-4 d-flex justify-content-center align-items-center">
                <Button
                  variant="outline-light"
                  style={{
                    borderColor: "#800080",
                    textDecoration: "none",
                    color: "#800080"
                  }}
                  onClick={handleUploadSolution}
                >
                  Subir solución ➜
                </Button>
                </div>
              </div>
    </div>
  );
};

export default SolveProblems;
