//import React from "react";
import BarLog from "../bar/BarLog";
import { Button, Card, CardBody } from "react-bootstrap";
import React, { useEffect, useState } from "react";




const Concursos = () => {

  
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
      <BarLog />
      <div className="container">
        <h1 className="text-left" style={{ color: "#800080" }}>
          Concursos
        </h1>

        <div className="row">
        <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label htmlFor="titulo" className="form-label">
          Título del concurso:
        </label>
        <input
          type="text"
          name="titulo"
          value={concurso.titulo}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      {/* Otros campos del formulario también deben ser adaptados con las clases de Bootstrap */}
      <div className="mb-3">
        <label htmlFor="descripcion" className="form-label">
          Descripción del concurso:
        </label>
        <textarea
          name="descripcion"
          value={concurso.descripcion}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="fh_inicio" className="form-label">
          Fecha y hora de inicio:
        </label>
        <input
          type="datetime-local"
          name="fh_inicio"
          value={concurso.fh_inicio}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="fh_fin" className="form-label">
          Fecha y hora de fin:
        </label>
        <input
          type="datetime-local"
          name="fh_fin"
          value={concurso.fh_fin}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="participant_limit" className="form-label">
          Límite de participantes:
        </label>
        <input
          type="number"
          name="participant_limit"
          value={concurso.participant_limit}
          onChange={handleChange}
          className="form-control"
        />
      </div>

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
                    <input
                      onChange={e => handleInputChange(problema._id, e.target.checked)}
                      type="checkbox"
                      className="checkbox-margin mr-3"
                    />
                    <p className="card-text">{problema.titulo}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button style={{ backgroundColor: "#800080", borderColor: "#800080" }} type="submit" className="btn btn-primary">
        Crear Concurso
      </button>
    </form>

  <div>
      <h3>Concursos creados</h3>
      <div className="row">
            {/* Muestra cada problema como una tarjeta en una cuadrícula */}
            {concursos.map((concurso) => (
              <div key={concurso._id} className="col-md-4 mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>{concurso.titulo}</Card.Title>
                    <Card.Text>{concurso.descripcion}</Card.Text>
                    {/* Puedes agregar más información según tus necesidades */}
                    <button style={{ backgroundColor: "#800080", borderColor: "#800080" }} className="btn btn-primary">
                      Abrir
                    </button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>


  </div>

        </div>


      </div>
    </div>
  );
};

export default Concursos;
