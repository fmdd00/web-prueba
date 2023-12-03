import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const BarLogConcursante = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand
            href="#"
            className="fs-2 fw-bold"
            style={{ color: "#800080" }}
          >
            <FontAwesomeIcon icon={faLaptopCode} />{" "} ULITORNEOS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/concursosConcursante">Concursos</Nav.Link>
              <Nav.Link href="/problemas">Mis Soluciones</Nav.Link>
              
              <Nav.Link href="/dashboard">Ledearboard</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="User1" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/perfil">Ver Perfil</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/" style={{ color: "red" }}>
                  Cerrar Sesión
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default BarLogConcursante;
