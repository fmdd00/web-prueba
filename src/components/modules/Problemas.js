//import React from "react";
import BarLog from "../bar/BarLog";
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from "react";
import ProblemasList from "./ProblemasList";


const Problemas = () => {
  
  const [problemas, setProblemas] = useState([]);
  const [nuevoProblema, setNuevoProblema] = useState({
    titulo: '',
    descripcion: '',
    casos_prueba: [
      {
        entrada: '',
        salida: '',
      },
    ],
  });

  
  useEffect(() => {

    
    const fetchData = async () => {
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
        console.log(data.problems);
        setProblemas(data.problems);
      } catch (error) {
        console.error('Error al obtener los problemas:', error);
      }
    };

    fetchData();


  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoProblema((prevProblema) => ({
      ...prevProblema,
      [name]: value,
    }));
  };

  const handleEntradaSalidaChange = (index, field, value) => {
    setNuevoProblema((prevProblema) => {
      const nuevosCasosPrueba = [...prevProblema.casos_prueba];
      nuevosCasosPrueba[index][field] = value;
      return {
        ...prevProblema,
        casos_prueba: nuevosCasosPrueba,
      };
    });
  };

  const handleSubmit = async (e) => {
    //e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/problemas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(nuevoProblema),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      // Puedes hacer algo con la respuesta, por ejemplo, actualizar el estado 'problemas'
      setProblemas((prevProblemas) => [...prevProblemas, data]);

      // Limpiar el formulario después de la creación exitosa
      setNuevoProblema({
        titulo: '',
        descripcion: '',
        casos_prueba: [
          {
            entrada: '',
            salida: '',
          },
        ],
      });
    } catch (error) {
      console.error('Error al crear un nuevo problema:', error);
    }
  };

  

  return (
    <div>
      <BarLog />
      <div className="container mt-4">
        <h1 className="text-left" style={{ color: "#800080" }}>
          Problemas
        </h1>

  <div className="container mt-4 border rounded p-4">
    <h1>Crear Nuevo Problema</h1>
    <form onSubmit={handleSubmit} className="row">
      <div className="col">
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Título:</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={nuevoProblema.titulo}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
        <label htmlFor="descripcion" className="form-label">Descripción:</label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={nuevoProblema.descripcion}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      </div>
      <div className="col">
        <div className="mb-3">
          <label>Casos de Prueba:</label>
          {nuevoProblema.casos_prueba.map((caso, index) => (

              <div key={index} className="row">
              <div className="col">
              <label>Entrada:</label>
              <input
                type="text"
                value={caso.entrada}
                onChange={(e) =>
                  handleEntradaSalidaChange(index, 'entrada', e.target.value)
                }
                className="form-control"
              />
              </div>
              <div className="col">
              <label>Salida:</label>
              <input
                type="text"
                value={caso.salida}
                onChange={(e) =>
                  handleEntradaSalidaChange(index, 'salida', e.target.value)
                }
                className="form-control"
              />
              </div>
              
              </div>

            
          ))}
          <div className="row m-4">
          <button
            type="button"
            onClick={() =>
              setNuevoProblema((prevProblema) => ({
                ...prevProblema,
                casos_prueba: [
                  ...prevProblema.casos_prueba,
                  { entrada: '', salida: '' },
                ],
              }))
            }
            className="btn btn-secondary"
          >
            Agregar Caso de Prueba
          </button>
          </div>
          
        </div>

      </div>
      <div className="row">
        <button type="submit" className="btn btn-primary">Crear Problema</button>
      </div>
      
      
      
      
    </form>
  </div>

  <br></br>



        


        <div className="row">
            {/* Muestra cada problema como una tarjeta en una cuadrícula */}
            {problemas.map((problema) => (
              <div key={problema._id} className="col-md-4 mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>{problema.titulo}</Card.Title>
                    <Card.Text>{problema.descripcion}</Card.Text>
                    {/* Puedes agregar más información según tus necesidades */}
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Problemas;
