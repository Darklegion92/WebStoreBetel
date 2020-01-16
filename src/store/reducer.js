import { ActionsTypes } from "./";

export default (state, action) => {
  var texto = "";
  if (state.filtros.texto) {
    texto = state.filtros.texto.toUpperCase();
  }
  switch (action.type) {
    case ActionsTypes.eliminarFiltroTexto:
      return {
        valorFiltro: "",
        filtros: {
          texto: "",
          familia: state.filtros.familia,
          grupo: state.filtros.grupo,
          subgrupo: state.filtros.subgrupo,
          marca: state.filtros.marca
        },
        montarArticulos: true
      };
    case ActionsTypes.eliminarFiltroFamilia:
      return {
        filtros: {
          texto: texto,
          familia: "",
          grupo: "",
          subgrupo: "",
          marca: state.filtros.marca
        },
        montarArticulos: true
      };
    case ActionsTypes.eliminarFiltroGrupo:
      return {
        filtros: {
          texto: texto,
          familia: state.filtros.familia,
          grupo: "",
          subgrupo: "",
          marca: state.filtros.marca
        },
        montarArticulos: true
      };
    case ActionsTypes.eliminarFiltroSubgrupo:
      return {
        filtros: {
          texto: texto,
          familia: state.filtros.familia,
          grupo: state.filtros.grupo,
          subgrupo: "",
          marca: state.filtros.marca
        },
        montarArticulos: true
      };
    case ActionsTypes.eliminarFiltroMarca:
      return {
        filtros: {
          texto: texto,
          familia: state.filtros.familia,
          grupo: state.filtros.grupo,
          subgrupo: state.filtros.subgrupo,
          marca: ""
        },
        montarArticulos: true
      };
    case ActionsTypes.onChange:
      return { [action.value.name]: action.value.value };
    case ActionsTypes.agregarFamilia:
      return {
        filtros: { texto, familia: action.value, marca: state.filtros.marca },
        montarArticulos: true
      };
    case ActionsTypes.agregarGrupo:
      return {
        filtros: {
          texto,
          grupo: action.value,
          familia: state.filtros.familia,
          marca: state.filtros.marca
        },
        montarArticulos: true
      };
    case ActionsTypes.agregarMarca:
      return {
        filtros: {
          texto,
          marca: action.value,
          familia: state.filtros.familia,
          grupo: state.filtros.grupo
        },
        montarArticulos: true
      };
    case ActionsTypes.CAMBIARSTATE:
      return action.value;
    case ActionsTypes.setActiveItemIndex:
      return { activeItemIndex: action.value };
    case ActionsTypes.agregarItemCarrito:
      action.value.cantidad = 1;
      var carItems = [action.value, ...state.carItems];
      localStorage.setItem("carItems", JSON.stringify(carItems));
      return { carItems, montarArticulos: true };

    case ActionsTypes.sumarItem:
      carItems = state.carItems;
      carItems[action.value].cantidad++;
      localStorage.setItem("carItems", JSON.stringify(carItems));
      return { carItems, montarArticulos: true };
    case ActionsTypes.restarItem:
      carItems = state.carItems;
      if (carItems[action.value].cantidad === 1)
        carItems.splice(action.value, 1);
      else carItems[action.value].cantidad--;
      localStorage.setItem("carItems", JSON.stringify(carItems));
      return { carItems, montarArticulos: true };
    case ActionsTypes.loginFacebook:
      state.verificarCliente(action.value);
      break;
    case ActionsTypes.guardarCliente:
      var cliente = state.cliente;
      cliente.condiciones = action.value.condiciones;
      cliente.direccionCliente = action.value.direccion;
      cliente.idBarrio = action.value.idBarrio;
      cliente.celularCliente = action.value.telefono;
      cliente.documentoCliente = action.value.documento;
      state.guardarCliente(cliente);
      break;
    case ActionsTypes.eliminarCliente:
      localStorage.removeItem("cliente");
      const value = {
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
      };
      return { cliente: value };
    case ActionsTypes.login:
      state.ingresarCliente(action.value.correo, action.value.password);
      break;
    case ActionsTypes.guardarPedidoNoRegistrado:
      state.guardarPedidoNoRegistrado(action.value);
      break;
    case ActionsTypes.editarCantidad:
      var carItems1 = state.carItems;
      carItems1[action.value.id].cantidad = action.value.cantidad;
      localStorage.setItem("carItems", JSON.stringify(carItems1));
      return { carItems: carItems1 };
    case ActionsTypes.eliminarItem:
      carItems = state.carItems;
      carItems.splice(action.value, 1);
      localStorage.setItem("carItems", JSON.stringify(carItems));
      return { carItems, montarArticulos: true };
    default:
      break;
  }
};
