//import React from "react";
import BarLog from "../bar/BarLog";
import { Button, Card, CardBody } from "react-bootstrap";
import React, { useEffect, useState } from "react";




const Concursos = () => {

  
  const [problemas, setProblemas] = useState([]);
  const [concursos, setConcursos] = useState([]);
  const [nuevoConcurso, setNuevoConcurso] = useState({
    titulo: '',
    descripcion: '',
    fh_inicio: '',
    fh_fin: '',
    participant_limit: 0,
    problemas : [
      {id : '' , 
      titulo:''}
      ],
  });

  useEffect(() => {

    
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/concurso", {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoConcurso((prevConcurso) => ({
      ...prevConcurso,
      [name]: value,
    }));
    console.log(nuevoConcurso);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('funciona form');
    try {
      const response = await fetch("http://localhost:8000/problemas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(nuevoConcurso),
      });

      if (!response.ok) {
        let message = await response.json();
        throw new Error(`HTTP error! Status: ${response.message}`);
      }

      const data = await response.json();

      // Puedes hacer algo con la respuesta, por ejemplo, actualizar el estado 'problemas'
      setProblemas((prevProblemas) => [...prevProblemas, data]);

      // Limpiar el formulario después de la creación exitosa
      setNuevoConcurso({
        titulo: '',
        descripcion: '',
        
      });
    } catch (error) {
      console.error('Error al crear un nuevo concurso:', error);
    }
  };


  return (
    <div>
      <BarLog />
      <div className="container">
        <h1 className="text-left" style={{ color: "#800080" }}>
          Concursos
        </h1>

        <div className="row">
  <form onSubmit={handleSubmit} className="col">

    <h2 className="text-center fw-bold">Concurso 1</h2>
    <div className="row g-2 mt-2">
      <div className="col-sm-6 col-md-6">
        <label
          className="form-label fw-bold"
          style={{ color: "#800080" }}
        >
          Descripción
        </label>
        <input
        value={nuevoConcurso.descripcion}
        onChange={handleInputChange}
          type="text"
          className="form-control"
          placeholder="Descripción del concurso"
        />
      </div>
      <div className="col-6 col-md-3">
        <label
          className="form-label fw-bold"
          style={{ color: "#800080" }}
        >
          Fecha Inicio
        </label>
        <input value={nuevoConcurso.fh_inicio} onChange={handleInputChange} type="date" className="form-control" />
      </div>
      <div className="col-6 col-md-3">
        <label
          className="form-label fw-bold"
          style={{ color: "#800080" }}
        >
          Hora Inicio
        </label>
        <input
        value={nuevoConcurso.fh_inicio}
        onChange={handleInputChange}
          type="text"
          className="form-control"
          placeholder="00:00 am"
        />
      </div>
    </div>

    <div className="row g-2 mt-2">
      <div className="col-6 col-md-6">
        <label
          className="form-label fw-bold"
          style={{ color: "#800080" }}
        >
          Lenguaje(s) de programación
        </label>
        <input

          type="text"
          className="form-control"
          placeholder="Python, C, C++, Java..."
        />
      </div>
      <div className="col-6 col-md-3">
        <label
          className="form-label fw-bold"
          style={{ color: "#800080" }}
        >
          Fecha Fin
        </label>
        <input onChange={handleInputChange} type="date" className="form-control" />
      </div>
      <div className="col-6 col-md-3">
        <label
          className="form-label fw-bold"
          style={{ color: "#800080" }}
        >
          Hora Fin
        </label>
        <input
        onChange={handleInputChange}
          type="text"
          className="form-control"
          placeholder="00:00 am"
        />
      </div>
      <br></br>
      <div>
        <h5>Problemas asignados</h5>
        <div className="row">
            {/* Muestra cada problema como una tarjeta en una cuadrícula */}
            {problemas.map((problema) => (
              <div key={problema._id} className="col-md-3 mb-3">
                <Card>
            <Card.Body className="d-flex align-items-center">
              {/* Coloca el checkbox y el título en una fila */}
              <div className="d-flex align-items-center">
                <input onChange={handleInputChange} type="checkbox" className="checkbox-margin mr-3" />
                <Card.Text>{problema.titulo}</Card.Text>
              </div>
            </Card.Body>
          </Card>
              </div>
            ))}
          </div>

      </div>

    </div>

    <div className="mt-2">
      <button
        type="submit"
        className="btn btn-primary "
        variant="outline-light"
        style={{ backgroundColor: "#800080", borderColor: "#800080" }}
      >
        Crear concurso
      </button>
    </div>

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
