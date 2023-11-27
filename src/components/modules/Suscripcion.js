import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import { Bar } from "../bar/Bar";
import engranaje from "../images/engranaje.png";

const Suscripcion = () => {
  return (
    <>
      <Bar />
      <div className="container col-6 mt-4">
        <h1 style={{ color: "#800080" }}>Selecciona un plan de Suscripción</h1>
        <CardGroup className="mt-4">
          <Card>
            <Card.Img variant="top" src={engranaje} alt="prueba" />
            <Card.Body>
              <Card.Title style={{ textAlign: "center", color: "#800080" }}>
                Plan de Prueba
              </Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to="#" className="rounded-0 btn btn-primary d-grid mx-auto" style={{ backgroundColor: '#800080', borderColor: '#800080' }}>
                Seleccionar
              </Link>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={engranaje} alt="prueba" />
            <Card.Body>
              <Card.Title style={{ textAlign: "center", color: "#800080" }}>
                Plan Básico
              </Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to="#" className="rounded-0 btn btn-primary d-grid mx-auto" style={{ backgroundColor: '#800080', borderColor: '#800080' }}>
                Seleccionar
              </Link>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={engranaje} alt="prueba" />
            <Card.Body>
              <Card.Title style={{ textAlign: "center", color: "#800080" }}>
                Plan Premium
              </Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to="#" className="rounded-0 btn btn-primary d-grid mx-auto" style={{ backgroundColor: '#800080', borderColor: '#800080' }}>
                Seleccionar
              </Link>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};

export default Suscripcion;
