import React, { Component, createContext } from "react";
import reducer from "./reducer";
import ActionsTypes from "./actionsTypes";
import CONSTANTES from "../config/CONSTANTES";
import axios from "axios";
const { Provider, Consumer } = createContext();

class ContextStore extends Component {
  state = {
    autenticado: "",
    valorFiltro: "",
    activePage: 1,
    activeItemIndex: 0,
    secciones: [],
    sucursales: [],
    montarArticulos: true,
    redesSociales: [
      {
        urlRedSocial: "##"
      },
      {
        urlRedSocial: "##"
      },
      {
        urlRedSocial: "##"
      }
    ],
    filtros: { texto: "", familia: "", marca: "" },
    mensajeEmpresa: "",
    familiaSelect: "",
    grupoSelect: "",
    subGrupoSelect: "",
    marcaSelect: "",
    marcas: [],
    articulos: [],
    carItems: [],
    imageSlider: [],
    agrupaciones: [],
    dispatch: action => {
      const response = reducer(this.state, action);
      this.setState(response);
    }
  };
  componentDidUpdate() {
    if (this.state.montarArticulos) {
      this.cargarArticulos();
    }
  }
  render() {
    return <Provider value={this.state}>{this.props.comp}</Provider>;
  }
  /*Funciones*/

  async cargarArticulos() {
    this.setState({ montarArticulos: false });
    const { filtros } = this.state;

    if (filtros.texto) {
      const resArticulos = await axios.get(
        CONSTANTES.APIREST + "/articulos/lista/" + filtros.texto
      );
      const articulos = resArticulos.data;
      this.setState({
        articulos
      });
    } else {
      const resArticulos = await axios.get(
        CONSTANTES.APIREST + "/articulos/lista/"
      );
      const articulos = resArticulos.data;
      this.setState({
        articulos
      });
    }
  }
}
const WrapperConsumer = Component => {
  return props => {
    return (
      <Consumer>
        {context => <Component {...props} context={context} />}
      </Consumer>
    );
  };
};

export { Provider, WrapperConsumer, ContextStore, Consumer, ActionsTypes };
