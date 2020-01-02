import React, { Component } from "react";
import "./styles.css";
import { WrapperConsumer, ActionsTypes } from "../../../store";
import CONSTANTES from "../../../config/CONSTANTES";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import { Button, Form } from "react-bootstrap/";

class filter extends Component {
  componentDidMount() {
    this.cargarDatosIniciales();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.context.filtros !== this.props.context.filtros ||
      nextProps.context.agrupaciones !== this.props.context.agrupaciones ||
      nextProps.context.marcas !== this.props.context.marcas
    );
  }

  cargarDatosIniciales = async () => {
    const { dispatch } = this.props.context;

    const resMarcas = await axios.get(CONSTANTES.APIREST + "/secciones/marcas");
    const marcas = resMarcas.data;
    const resAgrupaciones = await axios.get(
      CONSTANTES.APIREST + "/agrupaciones"
    );
    const agrupaciones = resAgrupaciones.data;

    dispatch({
      type: ActionsTypes.CAMBIARSTATE,
      value: {
        marcas,
        agrupaciones
      }
    });
  };

  render() {
    const {
      context: { filtros, agrupaciones, marcas,dispatch }
    } = this.props;

    return (
      <div className="panelFiltro">
        <h1>FILTROS</h1>
        <div className="filtros">
          {filtros.texto && (
            <div className="item-filtro" >
              {filtros.texto}
              <Button className="icono-cerrar" name="texto" onClick={e=>dispatch({ type: ActionsTypes.eliminarFiltro, value: e})}>
                <IoMdClose size={10} />
              </Button>
            </div>
          )}
          {filtros.familia && (
            <div className="item-filtro">
              {filtros.familia}
              <Button className="icono-cerrar" id="familia">
                <IoMdClose size={10} />
              </Button>
            </div>
          )}
          {filtros.marca && (
            <div className="item-filtro">
              {filtros.marca}
              <Button className="icono-cerrar" id="marca">
                <IoMdClose size={10} />
              </Button>
            </div>
          )}
        </div>
        <h1>DEPARTAMENTOS</h1>
        <div className="borde">
          <div className="grupo-filtro">
            {agrupaciones.map(agrupacion => {
              return <Form.Check label={agrupacion.nombreFamilia} />;
            })}
          </div>
        </div>
        <h1>MARCAS</h1>
        <div className="borde">
          <div className="grupo-filtro">
            {marcas.map(marca => {
              return <Form.Check label={marca.nombreMarca} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default WrapperConsumer(filter);
