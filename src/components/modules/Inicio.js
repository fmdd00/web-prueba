import React from 'react';
import BarLog from '../bar/BarLog';

import 'bootstrap/dist/css/bootstrap.min.css';

const Inicio = () => {
  return (
    <div>
      <BarLog />

      <div className="container mt-4">
        <h1 className="text-center mb-4">Bienvenido a UliTorneos</h1>


        <section className="row">
          <h2>Empieza a crear tus propios torneos</h2>
          <p>
            
¡Bienvenido a UliTorneos, la plataforma definitiva para la organización y gestión de torneos de programación! En UliTorneos, ofrecemos una experiencia integral diseñada para satisfacer las necesidades únicas de tu organización al organizar torneos, ya sean competiciones de algoritmos, hackathons de desarrollo web, o cualquier otro desafío emocionante que puedas imaginar.

Con UliTorneos, obtendrás acceso a una suite completa de herramientas de administración de torneos que simplificarán cada etapa del proceso. Desde la creación de eventos y la gestión de participantes hasta la publicación de resultados en tiempo real, nuestra plataforma te brinda el control total sobre tus torneos. Además, hemos diseñado una interfaz intuitiva y fácil de usar para garantizar que tu experiencia de organización sea tan fluida como sea posible.
          </p>
          <div className='row'>
          <img src="https://www.isdi.education/uploads/media/21-9-medium/00/3220-ISDI%20hackathon-que-es-por-que-tu-empresa-deberia-participar.webp?v=1-0" alt="Hackathon" className="img-fluid" />
          </div>
          
        </section>
      </div>
    </div>
  );
};

export default Inicio;
