import React, { Component, createContext } from "react";
import reducer from "./reducer";
import ActionsTypes from "./actionsTypes";
import CONSTANTES from "../config/CONSTANTES";
import axios from "axios";
const { Provider, Consumer } = createContext();

class ContextStore extends Component {
  state = {
    autenticado: "",
    errorClave: false,
    pedidoGrabado: false,
    guardarPedidoNoRegistrado: async cliente => {
      const res = await axios.post(
        CONSTANTES.APIREST + "/carrito/guardar/noregistrado",
        {
          cliente,
          carItems: this.state.carItems
        }
      );
      if (res.status === 200 && res.data.res) {
        localStorage.removeItem("carItems");
        this.setState({ pedidoGrabado: true, carItems: [] });
      }
    },
    ingresarCliente: async (correo, password) => {
      const res = await axios.get(CONSTANTES.APIREST + "/usuario/login/", {
        params: { correo }
      });

      if (res.status === 200 && res.data) {
        if (res.data[0].passwordCliente === password) {
          const cliente = {
            idCliente: res.data[0].idCliente,
            docuemntoCliente: res.data[0].docuemntoCliente,
            idFacebook: res.data[0].idFacebook,
            nombresCliente: res.data[0].password,
            apellidosCliente: res.data[0].apellidosCliente,
            direccionCliente: res.data[0].direccionCliente,
            idBarrio: res.data[0].idBarrio,
            celularCliente: res.data[0].celularCliente,
            correoCliente: res.data[0].correoCliente,
            idGenero: "",
            condiciones: false,
            password: ""
          };
          this.setState({ cliente });
          localStorage.setItem("cliente", JSON.stringify(cliente));
        } else this.setState({ errorClave: true });
      } else this.setState({ errorClave: true });
    },
    guardarCliente: async cliente => {
      const res = await axios.post(CONSTANTES.APIREST + "/usuario/guardar/", {
        cliente
      });
      if (res.status === 200)
        localStorage.setItem("cliente", JSON.stringify(cliente));
      this.setState({ crearCliente: false });
    },
    verificarCliente: async value => {
      if (value.userID !== "") {
        const res = await axios.get(
          CONSTANTES.APIREST + "/usuario/consultar/" + value.userID
        );
        if (res.status === 200 && !res.datos) {
          this.setState({
            crearCliente: true,
            cliente: {
              idFacebook: value.userID,
              nombresCliente: value.name,
              correoCliente: value.email
            }
          });
        }
      }
    },
    crearCliente: false,
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
    },
    barrios: [],
    agregarItem: this.agregarItem,
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
    dispatch: async action => {
      const response = await reducer(this.state, action);
      this.setState(response);
    }
  };

  componentDidMount() {
    this.cargarLocalStorage();
  }

  componentDidUpdate() {
    if (this.state.montarArticulos) {
      this.cargarArticulos();
      this.cargarBarrios();
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
    const cliente = JSON.parse(localStorage.getItem("cliente"));
    if (carItems) this.setState({ carItems });
    if (cliente) this.setState({ cliente });
  }
  async agregarItem(carItem, id) {
    if (id) {
      axios.post(CONSTANTES.APIREST + "/carrito", { carItem, id });
    } else {
      return axios.post(CONSTANTES.APIREST + "/carrito", { carItem });
    }
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
  async cargarBarrios() {
    const resBarrios = await axios.get(CONSTANTES.APIREST + "/barrios");
    const barrios = resBarrios.data;

    this.setState({
      barrios
    });
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
