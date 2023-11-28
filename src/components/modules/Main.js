import React from 'react'
import { Link } from 'react-router-dom';
import { Bar } from '../bar/Bar'
import hack from '../images/hack.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Main = () => {
  return (
    <div className="home_page">
            <Bar />
            <div className="container">
                <div className="row mt-4">
                    <div className="col-6">
                        <div>
                            <h1 className="fw-bold fs-1" style={{ textAlign: "justify", color: "#800080" }}>
                                Conecta compañías con talento en ingeniería para crear el futuro
                            </h1>
                        </div>
                        <div className="mt-4">
                            <p className="fs-5" style={{ textAlign: "justify" }}>
                                Bienvenido a una plataforma en línea que permite a las organizaciones y empresas organizar hackathones.
                            </p>
                        </div>
                    </div>
                    <div className="col-6 mb-4">
                        <img
                            className="img-fluid rounded float-end mb-2"
                            src={hack}
                            alt="imagenSL"
                        ></img>
                        <div
                            className="fst-italic form-text"
                            style={{ textAlign: "right" }}
                        >
                            Pantallazo de prueba Si puedes ver esto, significa que todo
                            funciona bien :)
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Main