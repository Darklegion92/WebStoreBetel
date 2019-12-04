import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import {
  Navbar,
  Nav,
  Figure,
  FormControl,
  InputGroup,
  Image
} from "react-bootstrap";
import { IoMdPerson } from "react-icons/io";
import { FiTruck } from "react-icons/fi";
import {MdStore,MdLocalGroceryStore} from 'react-icons/md'
import {GoSearch} from 'react-icons/go'
const logo = "img/logo/75x67.png";
export default class barraPrincipal extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" className="con-barPri">
        <Navbar.Brand href="#home">
          <Image src={logo} rounded />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
        <InputGroup >
          <FormControl
            placeholder="Compra"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            className="shadow-sm p-3 mb-5 bg-white rounded campoBusqueda"
          />
          <InputGroup.Append className="shadow-sm mb-5 bg-white rounded campoBusqueda">
            <InputGroup.Text id="basic-addon2"><GoSearch/></InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <Figure>
                <IoMdPerson />
                <Figure.Caption>Soy Cliente</Figure.Caption>
              </Figure>
            </Nav.Link>
            <Nav.Link href="#link">
              <Figure>
                <FiTruck />
                <Figure.Caption>Pedidos</Figure.Caption>
              </Figure>
            </Nav.Link>
            <Nav.Link href="#link">
              <Figure>
                < MdStore/>
                <Figure.Caption>Tiendas</Figure.Caption>
              </Figure>
            </Nav.Link>
            <Nav.Link href="#link">
              <Figure>
                <MdLocalGroceryStore />
                <Figure.Caption>Carrito</Figure.Caption>
              </Figure>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
