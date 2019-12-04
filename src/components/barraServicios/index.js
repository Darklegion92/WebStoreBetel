import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Button, Navbar } from "react-bootstrap";

export default class index extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" className="pr-BarSer">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="con-BarSer">
          <Button bsPrefix="btn-Ser" variant="Light" as="text">
            Tarjetas
          </Button>
          <Button bsPrefix="btn-Ser" variant="Light" as="text">
            Telefonía
          </Button>
          <Button bsPrefix="btn-Ser" variant="Light" as="text">
            Seguros
          </Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
