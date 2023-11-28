//import React from "react";
import BarLog from "../bar/BarLog";
import Card from 'react-bootstrap/Card';

const Problemas = () => {
  
  const [problemas, setProblemas] = useState([]);

  useEffect(() => {
    // Realiza la llamada a la API para obtener los problemas
    // Actualiza el estado con los problemas obtenidos
    
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/problemas');
        const data = await response.json();
        setProblemas(data.problems);
        console.log(response);
      } catch (error) {
        console.error('Error al obtener los problemas:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <BarLog />
      <div className="container mt-4">
        <h1 className="text-left" style={{ color: "#800080" }}>
          Problemas
        </h1>
        <div>
          <h1>Lista de Problemas</h1>
          {/* <ProblemasList problemas={problemas} /> */}
        </div>
      </div>
    </div>
  );
};

export default Problemas;
