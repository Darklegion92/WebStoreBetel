import React, { Component } from "react";
import { Form, Card } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";
import { ActionsTypes } from "../../../store";
import InputNumber from "rc-input-number";
export default class btnEnCarrito extends Component {
  state = {
    numero: 1
  };
  obtenerArticulo = () => {
    const { carItems, codigoArticulo } = this.props;
    var articulo;
    carItems.map((art, i) => {
      if (art.codigoArticulo === codigoArticulo) {
        articulo = {
          art,
          i
        };
      }
    });
    return articulo;
  };
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.numero !== nextState.numero;
  }
  componentDidMount() {
    const articulo = this.obtenerArticulo();
    this.setState({ numero: articulo.art.cantidad });
  }
  render() {
    const articulo = this.obtenerArticulo();
    const { dispatch } = this.props;
    return (
      <Card className="enCarrito">
        <Form.Control
          type="number"
          value={this.state.numero}
          onChange={e => {
            this.setState({ numero: e.target.value });
            if (e.target.value > 0)
              dispatch({
                type: ActionsTypes.editarCantidad,
                value: { id: articulo.i, cantidad: e.target.value }
              });
            else
              dispatch({
                type: ActionsTypes.eliminarItem,
                value: e.target.value
              });
          }}
        />
        <Form.Label>UND</Form.Label>
        <MdDeleteForever
          size="1.5em"
          color="red"
          onClick={e =>
            dispatch({
              type: ActionsTypes.eliminarItem,
              value: e.target.value
            })
          }
        />
      </Card>
    );
  }
}
