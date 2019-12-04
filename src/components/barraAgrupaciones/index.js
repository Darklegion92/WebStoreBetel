import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import "./styles.css";
export default function index() {
  return (
    <Nav className="justify-content-center">
      <NavDropdown title="Fruver" id="basic-nav-dropdown" className="cont-Agr">
        <NavDropdown.Item href="#action/3.1" >Frutas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Verduras</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Otros</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>

      <NavDropdown title="Fruver" id="basic-nav-dropdown" className="cont-Agr">
        <NavDropdown.Item href="#action/3.1">Frutas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Verduras</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Otros</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
  );
}
