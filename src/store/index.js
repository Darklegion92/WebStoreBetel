import React, { Component, createContext } from "react";
import reducer from "./reducer";
import ActionsTypes from "./actionsTypes";
const { Provider, Consumer } = createContext();

class ContextStore extends Component {
  constructor() {
    super();
    this.state = {
      autenticado: "",
      valorFiltro: "",
      activePage: 1,
      setActiveItemIndex: this.setActiveItemIndex,
      activeItemIndex: null,
      secciones: [],
      sucursales: [],
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
      filtros: [],
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
  }
  render() {
    return <Provider value={this.state}>{this.props.comp}</Provider>;
  }
  /*Funciones*/

  setActiveItemIndex = dato => {
    this.setState({
      activeItemIndex: dato
    });
  };
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
