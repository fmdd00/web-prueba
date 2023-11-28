import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

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
                <NavDropdown.Item href="https://github.com/atencia22/arquisoftware-grupo02">Repositorio de GitHub</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://github.com/ItsJavito/grupo02-as-backend">
                  Repo Backend
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Contacto</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link to="#">
                <button
                  className="btn btn-outline-secondary btn-lg"
                  style={{ borderColor: "#800080" }}
                >
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "purple" }}
                  >
                    Login
                  </Link>
                </button>
              </Nav.Link>
              <Nav.Link href="#">
                <button
                  className="btn btn-primary btn-lg"
                  style={{ backgroundColor: "#800080", borderColor: "#800080" }}
                >
                  <Link
                    to="/register"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Get Started
                  </Link>
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
