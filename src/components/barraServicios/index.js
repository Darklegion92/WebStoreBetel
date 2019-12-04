import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import {
  Button,
  Navbar,
} from "react-bootstrap";

export default class index extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" className="pr-BarSer">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav"  className="con-BarSer">
            <Button variant="Light" as="text">Servicio 01</Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
