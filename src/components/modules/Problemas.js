import React from "react";
import BarLog from "../bar/BarLog";
import Card from 'react-bootstrap/Card';

const Problemas = () => {
  return (
    <div>
      <BarLog />
      <div className="container mt-4">
        <h1 className="text-left" style={{ color: "#800080" }}>
          Problemas
        </h1>
        <div className="row g-0 mb-2">
          <Card className="col-sm-6 col-md-8">
            <Card.Body style={{ textAlign:"justify" }}>
                Aquí iría la descripción del problema obtenido de la BD.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              in cursus lectus. Proin varius lacinia feugiat. Nullam porttitor
              mauris sed mi lobortis placerat. Donec facilisis mollis dolor,
              quis euismod ligula pretium id. Vestibulum quis sem at orci tempor
              volutpat nec id ligula. Phasellus nec arcu non ex vulputate
              suscipit. Aliquam id augue elementum purus pulvinar maximus.
              Vestibulum at diam tellus. Vestibulum interdum sapien et metus
              malesuada, ut congue elit tincidunt. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
              Integer eleifend sit amet ex vel efficitur. Curabitur eleifend ut
              dolor sed elementum.
            </Card.Body>
          </Card>
          <Card className="col-6 col-md-4">
            <Card.Body className="fs-1" style={{ textAlign:"center", padding:"70px 0" }}>Concurso 1</Card.Body>
          </Card>
        </div>
        <div className="row g-0 mb-2">
          <Card className="col-sm-6 col-md-8">
            <Card.Body style={{ textAlign:"justify" }}>
                Aquí iría la descripción del problema obtenido de la BD.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              in cursus lectus. Proin varius lacinia feugiat. Nullam porttitor
              mauris sed mi lobortis placerat. Donec facilisis mollis dolor,
              quis euismod ligula pretium id. Vestibulum quis sem at orci tempor
              volutpat nec id ligula. Phasellus nec arcu non ex vulputate
              suscipit. Aliquam id augue elementum purus pulvinar maximus.
              Vestibulum at diam tellus. Vestibulum interdum sapien et metus
              malesuada, ut congue elit tincidunt. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
              Integer eleifend sit amet ex vel efficitur. Curabitur eleifend ut
              dolor sed elementum.
            </Card.Body>
          </Card>
          <Card className="col-6 col-md-4">
            <Card.Body className="fs-1" style={{ textAlign:"center", padding:"70px 0" }}>Concurso 2</Card.Body>
          </Card>
        </div>
        <div className="row g-0 mb-2">
          <Card className="col-sm-6 col-md-8">
            <Card.Body style={{ textAlign:"justify" }}>
                Aquí iría la descripción del problema obtenido de la BD.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              in cursus lectus. Proin varius lacinia feugiat. Nullam porttitor
              mauris sed mi lobortis placerat. Donec facilisis mollis dolor,
              quis euismod ligula pretium id. Vestibulum quis sem at orci tempor
              volutpat nec id ligula. Phasellus nec arcu non ex vulputate
              suscipit. Aliquam id augue elementum purus pulvinar maximus.
              Vestibulum at diam tellus. Vestibulum interdum sapien et metus
              malesuada, ut congue elit tincidunt. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
              Integer eleifend sit amet ex vel efficitur. Curabitur eleifend ut
              dolor sed elementum.
            </Card.Body>
          </Card>
          <Card className="col-6 col-md-4">
            <Card.Body className="fs-1" style={{ textAlign:"center", padding:"70px 0" }}>Concurso 3</Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Problemas;
