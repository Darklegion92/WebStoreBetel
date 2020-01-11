import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./styles.css";
import { WrapperConsumer, ActionsTypes } from "../../../store";
import CONSTANTES from "../../../config/CONSTANTES";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import { Button } from "react-bootstrap/";

class filter extends Component {
  componentDidMount() {
    this.cargarDatosIniciales();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.context.filtros !== this.props.context.filtros ||
      nextProps.context.agrupaciones !== this.props.context.agrupaciones ||
      nextProps.context.marcas !== this.props.context.marcas ||
      this.state.departamentos !== nextState.departamentos ||
      this.state.seleccion !== nextState.seleccion
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

  state = {
    redirect: false,
    departamentos: true,
    seleccion: 0,
    solo: true
  };

  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to={"/tienda"} />;
    }
  }

  render() {
    const {
      context: { filtros, agrupaciones, marcas, dispatch }
    } = this.props;

    return (
      <div className="panelFiltro">
        {this.renderRedirect()}
        <h1>FILTROS</h1>
        <div className="filtros">
          {filtros.texto && (
            <div className="item-filtro" id="texto">
              {filtros.texto}
              <Button
                className="icono-cerrar"
                name="texto"
                onClick={e => {
                  if (this.state.solo) this.setState({ redirect: true });
                  dispatch({
                    type: ActionsTypes.eliminarFiltroTexto,
                    value: e
                  });
                }}
              >
                <IoMdClose size={10} />
              </Button>
            </div>
          )}
          {filtros.familia && (
            <div className="item-filtro">
              {filtros.familia}
              <Button
                className="icono-cerrar"
                name="familia"
                onClick={e => {
                  this.setState({
                    redirect: true,
                    departamentos: true,
                    solo: true
                  });
                  dispatch({
                    type: ActionsTypes.eliminarFiltroFamilia,
                    value: e
                  });
                }}
              >
                <IoMdClose size={10} />
              </Button>
            </div>
          )}
          {filtros.grupo && (
            <div className="item-filtro">
              {filtros.grupo}
              <Button
                className="icono-cerrar"
                name="grupo"
                onClick={e => {
                  dispatch({
                    type: ActionsTypes.eliminarFiltroGrupo,
                    value: e
                  });
                }}
              >
                <IoMdClose size={10} />
              </Button>
            </div>
          )}
          {filtros.marca && (
            <div className="item-filtro">
              {filtros.marca}
              <Button
                className="icono-cerrar"
                name="marca"
                onClick={e =>
                  dispatch({ type: ActionsTypes.eliminarFiltroMarca, value: e })
                }
              >
                <IoMdClose size={10} />
              </Button>
            </div>
          )}
        </div>
        {this.state.departamentos && (
          <div>
            <h1>DEPARTAMENTOS</h1>
            <div className="borde">
              <div className="grupo-filtro">
                {agrupaciones.map((agrupacion, i) => {
                  if (i >= 1) {
                  }
                  return (
                    <li
                      id={agrupacion.nombreFamilia}
                      onClick={e => {
                        this.setState({
                          seleccion: i,
                          departamentos: false,
                          solo: false
                        });

                        dispatch({
                          type: ActionsTypes.agregarFamilia,
                          value: e.target.id
                        });
                      }}
                    >
                      {agrupacion.nombreFamilia}
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {!this.state.departamentos && (
          <div>
            <h1>GRUPOS</h1>
            <div className="borde">
              <div className="grupo-filtro">
                {agrupaciones[this.state.seleccion].grupos.map((grupo, i) => {
                  if (i >= 1)
                    return (
                      <li
                        id={grupo.nombreGrupo}
                        onClick={e => {
                          dispatch({
                            type: ActionsTypes.agregarGrupo,
                            value: e.target.name
                          });
                        }}
                      >
                        {grupo.nombreGrupo}
                      </li>
                    );
                })}
              </div>
            </div>
          </div>
        )}
        <h1>MARCAS</h1>
        <div className="borde">
          <div className="grupo-filtro">
            {marcas.map(marca => {
              return (
                <li
                  id={marca.nombreMarca}
                  onClick={e => {
                    dispatch({
                      type: ActionsTypes.agregarMarca,
                      value: e.target.id
                    });
                  }}
                >
                  {marca.nombreMarca}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default WrapperConsumer(filter);
