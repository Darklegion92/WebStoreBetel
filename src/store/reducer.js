import { ActionsTypes } from "./";


export default (state, action) => {
  switch (action.type) {
    case ActionsTypes.onChange:
      return { [action.value.name]: action.value.value };
    case ActionsTypes.CAMBIARSTATE:
      return action.value;
    case ActionsTypes.eliminarFiltro:
      action.value.preventDefault();
      return {
        filtros: { [action.value.target.name]: "" },
        montarArticulos: true
      };
    case ActionsTypes.setActiveItemIndex:
      return { activeItemIndex: action.value };
    default:
      break;
  }
};
