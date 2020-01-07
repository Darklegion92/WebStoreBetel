import React, { Component, createContext } from "react";
import reducer from "./reducer";
import ActionsTypes from "./actionsTypes";
import CONSTANTES from "../config/CONSTANTES";
import axios from "axios";
const { Provider, Consumer } = createContext();

class ContextStore extends Component {
  state = {
    autenticado: "",
    formatNumber: {
      separador: ".", // separador para los miles
      sepDecimal: ",", // separador para los decimales
      formatear: function(num) {
        num += "";
        var splitStr = num.split(".");
        var splitLeft = splitStr[0];
        var splitRight =
          splitStr.length > 1 ? this.sepDecimal + splitStr[1] : "";
        var regx = /(\d+)(\d{3})/;
        while (regx.test(splitLeft)) {
          splitLeft = splitLeft.replace(regx, "$1" + this.separador + "$2");
        }
        return this.simbol + splitLeft + splitRight;
      },
      new: function(num, simbol) {
        this.simbol = simbol || "";
        return this.formatear(num);
      }
    },
    valorFiltro: "",
    activePage: 1,
    activeItemIndex: 0,
    secciones: [],
    sucursales: [],
    montarArticulos: true,
    cargarLocalStorage: true,
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
    filtros: { texto: "", familia: "", grupo: "", subgrupo: "", marca: "" },
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
  componentDidMount() {
    this.cargarLocalStorage();
  }
  componentDidUpdate() {
    if (this.state.montarArticulos) {
      this.cargarArticulos();
    }
    if (this.state.cargarLocalStorage) {
      this.cargarLocalStorage();
    }
  }
  render() {
    return <Provider value={this.state}>{this.props.comp}</Provider>;
  }
  /*Funciones*/
  cargarLocalStorage() {
    this.setState({ cargarLocalStorage: false });
    const carItems = JSON.parse(localStorage.getItem("carItems"));
    if (carItems) this.setState({ carItems });
  }

  async cargarArticulos() {
    this.setState({ montarArticulos: false });
    const { filtros } = this.state;
    if (
      filtros.texto !== "" ||
      filtros.familia !== "" ||
      filtros.grupo !== "" ||
      filtros.subgrupo !== "" ||
      filtros.marca !== ""
    ) {
      const resArticulos = await axios.get(
        CONSTANTES.APIREST + "/articulos/filtro",
        {
          params: {
            texto: filtros.texto,
            familia: filtros.familia,
            grupo: filtros.grupo,
            subgrupo: filtros.subgrupo,
            marca: filtros.marca
          }
        }
      );
      const articulos = resArticulos.data;
      console.log(articulos);

      this.setState({
        articulos
      });
    } else {
      const resArticulos = await axios.get(
        CONSTANTES.APIREST + "/articulos/lista"
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
