import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

export const Bar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand
            href="/"
            className="fs-2 fw-bold"
            style={{ color: "#800080" }}
          >
            <FontAwesomeIcon icon={faLaptopCode} />{" "}ULITORNEOS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">Acerca de</Nav.Link>
              <NavDropdown title="Recursos" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="https://github.com/ItsJavito/grupo02-as-backend">
                  Repo Backend
                </NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/fmdd00/web-prueba">
                  Repo Frontend
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://github.com/ulima-arqui-sw/grupo02">Documentación de arquitectura</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Contacto</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login">
                <Button
                  variant="outline-light"
                  style={{
                    borderColor: "#800080",
                    textDecoration: "none",
                    color: "#800080"
                  }}
                >
                  Login
                </Button>
              </Nav.Link>
              <Nav.Link href="/register">
                <Button
                  variant="primary"
                  style={{
                    backgroundColor: "#800080",
                    borderColor: "#800080",
                    textDecoration: "none"
                  }}
                >
                  Get Started
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
