import React from "react";
import BarLog from "../bar/BarLog";
import { Button, Card, CardBody } from "react-bootstrap";

const Concursos = () => {
  return (
    <div>
      <BarLog />
      <div className="container mt-4">
        <h1 className="text-left" style={{ color: "#800080" }}>
          Concursos
        </h1>
        <div className="mt-4">
          <div className="row g-0">
            <div className="col-sm-6 col-md-10">
              <h2 className="text-center">Concurso 1</h2>
            </div>
            <div className="col-6 col-md-2 text-center">
              <Card className="mb-2">
                <CardBody>Concurso 1</CardBody>
              </Card>
              <Card className="mb-2">
                <CardBody>Concurso 2</CardBody>
              </Card>
              <Card className="mb-2">
                <CardBody>Concurso 3</CardBody>
              </Card>
              <Card className="mb-2">
                <CardBody>Concurso 4</CardBody>
              </Card>
              <Button
                className="col-md-12"
                style={{
                  backgroundColor: "#800080",
                  border: "none",
                  textDecoration: "none",
                }}
              >
                + Crear nuevo concurso
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concursos;
