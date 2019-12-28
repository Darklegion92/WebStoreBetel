import { ActionsTypes } from "./";
export default (state, action) => {
  switch (action.type) {
    case ActionsTypes.onChange:
      return { valorFiltro: action.value };
    case ActionsTypes.CAMBIARSTATE:
      return action.value;
    default:
      break;
  }
};
