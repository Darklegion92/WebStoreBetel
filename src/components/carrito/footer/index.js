import React, { Component } from "react";
import { WrapperConsumer, ActionsTypes } from "../../../store";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
import "./styles.css";

class footer extends Component {
  state = {
    show: false,
    cliente: {
      idCliente: "",
      docuemntoCliente: "",
      idFacebook: "",
      nombresCliente: "",
      apellidosCliente: "",
      direccionCliente: "",
      idBarrio: "",
      celularCliente: "",
      correoCliente: "",
      idGenero: "",
      condiciones: false,
      password: ""
    }
  };
  render() {
    const {
      carItems,
      formatNumber,
      cliente,
      barrios,
      dispatch
    } = this.props.context;
    var total = 0;
    if (carItems) {
      carItems.map(item => {
        total = total + item.cantidad * item.precioArticulo;
        return null;
      });
    }
    const handleClose = () => this.setState({ show: false });
    const handleShow = () => {
      if (total > 0) this.setState({ show: true });
    };

    return (
      <footer class="footer-bs">
        <Row>
          <Col xs={6} md={2}>
            <TiShoppingCart size={50} />
          </Col>
          <Col xs={6} md={6}>
            <h1>TOTAL COMPRA</h1>
          </Col>
          <Col xs={6} md={3}>
            <h1>{formatNumber.new(total, "$")}</h1>
          </Col>
          <Col xs={6} md={1}>
            <Button onClick={handleShow}>Confirmar</Button>
          </Col>
        </Row>
        {cliente.celularCliente !== "" && (
          <Modal show={this.state.show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmación de Pedido</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Su pedido tiene un costo aproximado de{" "}
              <spam>{formatNumber.new(total, "$")}.</spam>
              Se le recuerda que su total puede variar si llevas artículos de
              peso variable
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Confirmar
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        {cliente.celularCliente === "" && (
          <Modal show={this.state.show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Confirma Tus Datos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Para continuar con su pedido debes regalarnos tus datos para la
              entrega
              <Form>
                <Form.Group controlId="validationCustom01">
                  <Form.Label>Nombre Completo*</Form.Label>
                  <Form.Control
                    placeholder="Ej. Jose Maria Escalante"
                    value={this.state.cliente.nombresCliente}
                    onChange={e =>
                      this.setState({
                        cliente: {
                          direccionCliente: this.state.cliente.direccionCliente,
                          nombresCliente: e.target.value,
                          idBarrio: this.state.cliente.idBarrio,
                          telefonoCliente: this.state.cliente.telefonoCliente,
                          documentoCliente: this.state.cliente.documentoCliente,
                          condiciones: this.state.cliente.condiciones
                        }
                      })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Dirección*</Form.Label>
                  <Form.Control
                    placeholder="Ej. Calle x # 25-62"
                    value={this.state.cliente.direccionCliente}
                    onChange={e =>
                      this.setState({
                        cliente: {
                          direccionCliente: e.target.value,
                          nombresCliente: this.state.cliente.nombresCliente,
                          idBarrio: this.state.cliente.idBarrio,
                          celularCliente: this.state.cliente.celularCliente,
                          documentoCliente: this.state.cliente.documentoCliente,
                          condiciones: this.state.cliente.condiciones
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
                              cliente: {
                                idBarrio: e.target.id,
                                direccionCliente: this.state.cliente
                                  .direccionCliente,
                                nombresCliente: this.state.cliente
                                  .nombresCliente,
                                celularCliente: this.state.cliente
                                  .celularCliente,
                                documentoCliente: this.state.cliente
                                  .documentoCliente,
                                condiciones: this.state.cliente.condiciones
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
                    value={this.state.cliente.celularCliente}
                    onChange={e =>
                      this.setState({
                        cliente: {
                          direccionCliente: this.state.cliente.direccionCliente,
                          nombresCliente: this.state.cliente.nombresCliente,
                          idBarrio: this.state.cliente.idBarrio,
                          celularCliente: e.target.value,
                          documentoCliente: this.state.cliente.documentoCliente,
                          condiciones: this.state.cliente.condiciones
                        }
                      })
                    }
                  />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                  <Form.Label>Documento Factura</Form.Label>
                  <Form.Control
                    placeholder="Ej. 1090452688"
                    value={this.state.cliente.documentoCliente}
                    onChange={e =>
                      this.setState({
                        cliente: {
                          direccionCliente: this.state.cliente.direccionCliente,
                          nombresCliente: this.state.cliente.nombresCliente,
                          idBarrio: this.state.cliente.idBarrio,
                          celularCliente: this.state.cliente.celularCliente,
                          documentoCliente: e.target.value,
                          condiciones: this.state.cliente.condiciones
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
                        cliente: {
                          condiciones: e.target.checked,
                          direccionCliente: this.state.cliente.direccionCliente,
                          nombresCliente: this.state.cliente.nombresCliente,
                          idBarrio: this.state.cliente.idBarrio,
                          celularCliente: this.state.cliente.celularCliente,
                          documentoCliente: this.state.cliente.documentoCliente
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
                  this.setState({ show: false });
                  dispatch({
                    type: ActionsTypes.guardarPedidoNoRegistrado,
                    value: this.state.cliente
                  });
                }}
              >
                Confirmar
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </footer>
    );
  }
}

export default WrapperConsumer(footer);
