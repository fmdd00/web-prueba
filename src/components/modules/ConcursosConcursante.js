//import React from "react";
import BarLog from "../bar/BarLog";
import { Button, Card, CardBody } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import BarLogConcursante from "../bar/BarLogConcursante";

import { Link } from "react-router-dom";



const ConcursosConcursante = () => {

  
  const [problemas, setProblemas] = useState([]);
  const [concursos, setConcursos] = useState([]);
  const [concurso, setConcurso] = useState({
    titulo: '',
    descripcion: '',
    fh_inicio: '',
    fh_fin: '',
    participant_limit: '',
    problemas: [],
    participantes: [],
  });

  useEffect(() => {

    
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/concurso/all", {
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

        setConcursos(data);
      } catch (error) {
        console.error('Error al obtener los concursos:', error);
      }
    };


    fetchData();

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

  const handleInputChange = (problemaId, isChecked) => {
    if (isChecked) {
      // Agrega el problema al arreglo de problemas seleccionados
      setConcurso((prevConcurso) => ({
        ...prevConcurso,
        problemas: [
          ...prevConcurso.problemas,
          {
            id: problemaId,
            titulo: problemas.find((problema) => problema._id === problemaId).titulo,
          },
        ],
      }));
    } else {
      // Remueve el problema del arreglo de problemas seleccionados
      setConcurso((prevConcurso) => ({
        ...prevConcurso,
        problemas: prevConcurso.problemas.filter((problema) => problema.id !== problemaId),
      }));
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setConcurso(prevConcurso => ({
      ...prevConcurso,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    console.log(concurso);
    event.preventDefault();

    // Realiza la solicitud al backend
    fetch('http://localhost:8000/concurso', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Asegúrate de incluir esta línea para enviar las cookies
      body: JSON.stringify(concurso),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', data);
        // Puedes agregar lógica adicional aquí, como actualizar el estado del componente después de enviar la solicitud
      })
      .catch(error => console.error('Error al enviar la solicitud:', error));
  };


  return (
    <div>
      <BarLogConcursante />
      <div className="container">
        <h1 className="text-left" style={{ color: "#800080" }}>
          Concursos
        </h1>

        <div className="row">


  <div>
      <div className="row">
            {/* Muestra cada problema como una tarjeta en una cuadrícula */}
            {concursos.map((concurso) => (
              <div key={concurso._id} className="col-md-4 mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>{concurso.titulo}</Card.Title>
                    <Card.Text>{concurso.descripcion}</Card.Text>
                    {/* Puedes agregar más información según tus necesidades */}
                    <Link
                  style={{ backgroundColor: "#800080", borderColor: "#800080" }} className="btn btn-primary"
                  to="/problemasConcursante"
                >
                  Regístrate
                </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
          <div key={concurso._id} className="col-md-4 mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>{concurso.titulo}</Card.Title>
                    <Card.Text>{concurso.descripcion}</Card.Text>
                    {/* Puedes agregar más información según tus necesidades */}
                    <Link
                  style={{ backgroundColor: "#800080", borderColor: "#800080" }} className="btn btn-primary"
                  to="/problemasConcursante"
                >
                  Iniciar
                </Link>
                  </Card.Body>
                </Card>
              </div>

          
          
             

  </div>

        </div>


      </div>
    </div>
  );
};

export default ConcursosConcursante;
