//import React from "react";
import BarLog from "../bar/BarLog";
import { Button, Card, CardBody } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import BarLogConcursante from "../bar/BarLogConcursante";
import { useLocation } from 'react-router-dom';


import { Link } from "react-router-dom";


const ProblemasConcursante = () => {
  
  
    const location = useLocation();
    const solucionSubida = location.state?.solucionSubida || false;
  
    // Resto del componente...
  
  
  const [problemas, setProblemas] = useState([]);
  
  
  useEffect(() => {

    const fetchData2 = async () => {
      try {
        const response = await fetch("http://localhost:8000/problemas", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: 'include',
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        // Manejar la respuesta aquí

        setProblemas(data.problems);
      } catch (error) {
        console.error('Error al obtener los problemas:', error);
      }
    };

    fetchData2();

  }, []);



  return (
    <div>
      <BarLog />
      <div className="container">
        <h1 className="text-left" style={{ color: "#800080" }}>
          Concursos
        </h1>

        <div className="row">


  <div>
  <div className="mb-3">
        <h5>Problemas asignados</h5>
        <div className="row">
          {/* Muestra cada problema como una tarjeta en una cuadrícula */}
          {problemas.map(problema => (
            <div key={problema._id} className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body d-flex align-items-center">
                  {/* Coloca el checkbox y el título en una fila */}
                  <div className="d-flex align-items-center">
                    
                  <Link
                  style={{ 
                    backgroundColor: solucionSubida ? "#00FF00" : "#800080",
                    borderColor: solucionSubida ? "#00FF00" : "#800080" }} className="btn btn-primary"
                  to="/solveproblems"
                >
                  {problema.titulo}
                </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="col-md-3 mb-3"> 
               <div className="card">
                <div className="card-body d-flex align-items-center">
                  {/* Coloca el checkbox y el título en una fila */}
                  <div className="d-flex align-items-center">
                  <Link
                  style={{ backgroundColor: "#800080", borderColor: "#800080" }} className="btn btn-primary"
                  to="/solveproblems"
                >
                  Problema A
                </Link>
                    
                  </div>
                </div>
              
              </div>
            </div>
      </div>

  </div>

        </div>


      </div>
    </div>
  );
};

export default ProblemasConcursante;
