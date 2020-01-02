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
import { MdStore, MdLocalGroceryStore } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { WrapperConsumer, ActionsTypes } from "../../store";
import CONSTANTES from '../../config/CONSTANTES'

const logo = CONSTANTES.APIREST+"/img/logo/75x59.png";

class barraPrincipal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.context.carItems !== nextProps.context.carItems;
  }

  render() {
    const { carItems, dispatch } = this.props.context;
    return (
      <Navbar bg="light" expand="lg" className="con-barPri">
        <Navbar.Brand href="/">
          <Image src={logo} rounded />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <InputGroup>
            <FormControl
              name="valorFiltro"
              placeholder="¿Qué producto busca?"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              className="shadow-sm p-3 mb-5 bg-white rounded campoBusqueda"
              onChange={e =>
                dispatch({ type: ActionsTypes.onChange, value: e.target })
              }
              onKeyPress={e =>
                dispatch({ type: ActionsTypes.onKeyPress, value: e })
                }
            />
            <InputGroup.Append className="shadow-sm mb-5 bg-white rounded campoBusqueda">
              <InputGroup.Text id="basic-addon2">
                <GoSearch color="orange" />
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>

          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <Figure>
                <IoMdPerson className="icon-pri" />
                <Figure.Caption className="text-pri">
                  Soy Cliente
                </Figure.Caption>
              </Figure>
            </Nav.Link>
            <Nav.Link href="#link">
              <Figure>
                <FiTruck className="icon-pri" />
                <Figure.Caption className="text-pri">Pedidos</Figure.Caption>
              </Figure>
            </Nav.Link>
            <Nav.Link href="#link">
              <Figure>
                <MdStore className="icon-pri" />
                <Figure.Caption className="text-pri">Tiendas</Figure.Caption>
              </Figure>
            </Nav.Link>
            <Nav.Link href="/carrito">
              <Figure>
                <div className="carrito-logo">
                  {carItems.length > 0 && (
                    <div className="carrito-cantidad">{carItems.length}</div>
                  )}

                  <MdLocalGroceryStore className="carrito-icon" />
                </div>
                <Figure.Caption className="text-pri">Carrito</Figure.Caption>
              </Figure>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default WrapperConsumer(barraPrincipal);
