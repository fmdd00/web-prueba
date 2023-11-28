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
          <div className="row g-2">
            <div className="col-sm-6 col-md-10">
              <h2 className="text-center fw-bold">Concurso 1</h2>
              <div class="row g-2 mt-2">
                <div class="col-sm-6 col-md-6">
                  <label
                    className="form-label fw-bold"
                    style={{ color: "#800080" }}
                  >
                    Descripción
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Descripción del concurso"
                  />
                </div>
                <div class="col-6 col-md-3">
                  <label
                    className="form-label fw-bold"
                    style={{ color: "#800080" }}
                  >
                    Fecha Inicio
                  </label>
                  <input type="date" className="form-control" />
                </div>
                <div class="col-6 col-md-3">
                  <label
                    className="form-label fw-bold"
                    style={{ color: "#800080" }}
                  >
                    Hora Inicio
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="00:00 am"
                  />
                </div>
              </div>

              <div class="row g-2 mt-2">
                <div class="col-6 col-md-6">
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
                <div class="col-6 col-md-3">
                  <label
                    className="form-label fw-bold"
                    style={{ color: "#800080" }}
                  >
                    Fecha Fin
                  </label>
                  <input type="date" className="form-control" />
                </div>
                <div class="col-6 col-md-3">
                  <label
                    className="form-label fw-bold"
                    style={{ color: "#800080" }}
                  >
                    Hora Fin
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="00:00 am"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div class="row g-2 text-center">
                  <div class="col-6 col-md-4">
                    <Card>
                      <CardBody>Problema A</CardBody>
                    </Card>
                  </div>
                  <div class="col-6 col-md-4">
                    {/*Dentro de este div iría otra Card con el problema siguiente y así con los demás*/}
                    <Card>
                      <CardBody>Placeholder</CardBody>
                    </Card>
                  </div>
                  <div class="col-6 col-md-4">
                    <Card>
                      <CardBody>Placeholder</CardBody>
                    </Card>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <Button
                  className="col-md-12"
                  variant="outline-light"
                  style={{ borderColor: "#800080", color: "#800080" }}
                >
                  + Agregar problema
                </Button>
              </div>
            </div>
            <div className="col-6 col-md-2 text-center">
              {/*Cada vez que se presione el botón de crear concurso, debería aparecer una nueva Card*/}
              {/*No estoy seguro, pero en lugar de un Card, puede ser un botón, y que al presionarlo se muestren los datos del concurso en cuestión*/}
              <Card className="mb-2">
                <CardBody>Concurso 1</CardBody>
              </Card>
              <Card className="mb-2">
                <CardBody>Placeholder</CardBody>
              </Card>
              <Button
                className="col-md-12"
                variant="outline-light"
                style={{ borderColor: "#800080", color: "#800080" }}
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
