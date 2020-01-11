import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import {
  Navbar,
  Nav,
  Figure,
  FormControl,
  InputGroup,
  Image,
  Modal,
  Button,
  Form
} from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import { IoMdPerson, IoLogoFacebook, IoIosLogOut } from "react-icons/io";
import { FiTruck } from "react-icons/fi";
import { MdStore, MdLocalGroceryStore } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { WrapperConsumer, ActionsTypes } from "../../store";
import CONSTANTES from "../../config/CONSTANTES";
import FacebookLogin from "react-facebook-login";

const logo = CONSTANTES.APIREST + "/img/logo/75x59.png";

class barraPrincipal extends Component {
  state = {
    redirect: false,
    showLogin: false,
    showComplete: false,
    formulario: {
      direccion: "",
      idBarrio: 0,
      telefono: "",
      documento: "",
      condiciones: false
    }
  };

  renderRedirect() {
    if (this.state.redirect) {
      return (
        <Redirect to={"/tienda?texto=" + this.props.context.valorFiltro} />
      );
    }
  }
  responseFacebook = response => {
    const { dispatch } = this.props.context;
    dispatch({ type: ActionsTypes.loginFacebook, value: response });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.context.carItems !== nextProps.context.carItems ||
      this.props.context.valorFiltro !== nextProps.context.valorFiltro ||
      this.props.context.crearCliente !== nextProps.context.crearCliente ||
      this.props.context.cliente !== nextProps.context.cliente ||
      this.state !== nextState
    );
  }

  componentDidUpdate() {
    if (this.props.context.crearCliente && this.state.showLogin) {
      this.setState({ showLogin: false, showComplete: true });
    }
  }
  render() {
    const { carItems, dispatch, barrios, cliente } = this.props.context;
    const handleClose = () =>
      this.setState({ showLogin: false, showComplete: false });
    const handleShow = () => this.setState({ showLogin: true });
    return (
      <Navbar bg="light" expand="lg" className="con-barPri">
        {this.renderRedirect()}
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
              value={this.props.context.valorFiltro}
              onChange={e => {
                this.setState({
                  redirect: false
                });
                dispatch({ type: ActionsTypes.onChange, value: e.target });
              }}
              onKeyPress={e => {
                if (e.key === "Enter") {
                  this.setState({
                    redirect: true
                  });
                }
              }}
            />
            <InputGroup.Append className="shadow-sm mb-5 bg-white rounded campoBusqueda">
              <InputGroup.Text id="basic-addon2">
                <GoSearch color="orange" />
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          <Nav className="mr-auto">
            {cliente.celularCliente === "" && (
              <Nav.Link href="#home">
                <Figure onClick={handleShow}>
                  <IoMdPerson className="icon-pri" />
                  <Figure.Caption className="text-pri">
                    Soy Cliente
                  </Figure.Caption>
                </Figure>
              </Nav.Link>
            )}
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
            {cliente.celularCliente !== "" && (
              <Nav.Link href="#home">
                <Figure
                  onClick={e =>
                    dispatch({
                      type: ActionsTypes.eliminarCliente,
                      value: null
                    })
                  }
                >
                  <IoIosLogOut className="icon-pri" />
                  <Figure.Caption className="text-pri">Salir</Figure.Caption>
                </Figure>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
        <Modal show={this.state.showLogin} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ingresar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="tucorreo@dominio.com"
                  value={this.state.formulario.correo}
                  onChange={e =>
                    this.setState({
                      formulario: {
                        correo: e.target.value,
                        password: this.state.formulario.password
                      }
                    })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  value={this.state.formulario.password}
                  onChange={e =>
                    this.setState({
                      formulario: {
                        password: e.target.value,
                        correo: this.state.formulario.correo
                      }
                    })
                  }
                />
              </Form.Group>
              <Form.Row>
                <h6>Ingresa Con Redes Sociales: </h6>
                <FacebookLogin
                  appId="623731881768611"
                  autoLoad={false}
                  fields="name,email"
                  icon={<IoLogoFacebook color="blue" size={35} />}
                  callback={this.responseFacebook}
                  cssClass="loginFace"
                />
              </Form.Row>
              <Form.Row>
                <Link>Registrar</Link>
              </Form.Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Salir
            </Button>
            <Button
              variant="primary"
              onClick={e => {
                this.setState({ showLogin: false });
                dispatch({
                  type: ActionsTypes.login,
                  value: {
                    correo: this.state.formulario.correo,
                    password: this.state.formulario.password
                  }
                });
              }}
            >
              Ingresar
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.showComplete} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Datos Adicionales</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Completa los datos de inscripción
            <Form>
              <Form.Group controlId="formGridAddress1">
                <Form.Label>Dirección*</Form.Label>
                <Form.Control
                  placeholder="Ej. Calle x # 25-62"
                  value={this.state.formulario.direccion}
                  onChange={e =>
                    this.setState({
                      formulario: {
                        direccion: e.target.value,
                        idBarrio: this.state.formulario.idBarrio,
                        telefono: this.state.formulario.telefono,
                        documento: this.state.formulario.documento,
                        condiciones: this.state.formulario.condiciones
                      }
                    })
                  }
                />
                <Form.Label>Barrio*</Form.Label>
                <Form.Control as="select">
                  <option>Seleccione...</option>
                  {barrios.map(barrio => {
                    return (
                      <option
                        id={barrio.idBarrio}
                        onClick={e =>
                          this.setState({
                            formulario: {
                              idBarrio: e.target.id,
                              direccion: this.state.formulario.direccion,
                              telefono: this.state.formulario.telefono,
                              documento: this.state.formulario.documento,
                              condiciones: this.state.formulario.condiciones
                            }
                          })
                        }
                      >
                        {barrio.nombreBarrio}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formGridAddress1">
                <Form.Label>Teléfono de Contacto*</Form.Label>
                <Form.Control
                  placeholder="Ej. 3103256844 - 5893154"
                  value={this.state.formulario.telefono}
                  onChange={e =>
                    this.setState({
                      formulario: {
                        telefono: e.target.value,
                        idBarrio: this.state.formulario.idBarrio,
                        direccion: this.state.formulario.direccion,
                        documento: this.state.formulario.documento,
                        condiciones: this.state.formulario.condiciones
                      }
                    })
                  }
                />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Documento Factura</Form.Label>
                <Form.Control
                  placeholder="Ej. 1090452688"
                  value={this.state.formulario.documento}
                  onChange={e =>
                    this.setState({
                      formulario: {
                        documento: e.target.value,
                        idBarrio: this.state.formulario.idBarrio,
                        direccion: this.state.formulario.direccion,
                        telefono: this.state.formulario.telefono,
                        condiciones: this.state.formulario.condiciones
                      }
                    })
                  }
                />
              </Form.Group>
              <Form.Group id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Acepta Terminos y Condiciones"
                  onClick={e =>
                    this.setState({
                      formulario: {
                        condiciones: e.target.checked,
                        idBarrio: this.state.formulario.idBarrio,
                        direccion: this.state.formulario.direccion,
                        telefono: this.state.formulario.telefono,
                        documento: this.state.formulario.documento
                      }
                    })
                  }
                />
              </Form.Group>
              <Form.Group id="formGridCheckbox">
                <Form.Label>Los campos con (*) son obligatorios</Form.Label>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button
              variant="primary"
              onClick={e => {
                this.setState({ showComplete: false });
                dispatch({
                  type: ActionsTypes.guardarCliente,
                  value: this.state.formulario
                });
              }}
            >
              Confirmar
            </Button>
          </Modal.Footer>
        </Modal>
      </Navbar>
    );
  }
}
export default WrapperConsumer(barraPrincipal);
