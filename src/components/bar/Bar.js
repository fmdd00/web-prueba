import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

export const Bar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand
            href="/"
            className="fs-2 fw-bold"
            style={{ color: "#800080" }}
          ><FontAwesomeIcon icon={faLaptopCode} />
            ULITORNEOS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Resources" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link to="#">
                <button className="btn btn-outline-secondary btn-lg" style={{ borderColor: '#800080' }}>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "purple" }}
                  >
                    Login
                  </Link>
                </button>
              </Nav.Link>
              <Nav.Link href="#">
                <button className="btn btn-primary btn-lg" style={{ backgroundColor: '#800080', borderColor: '#800080' }}>
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
