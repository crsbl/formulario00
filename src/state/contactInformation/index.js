import typeState from "./type";

const estadoInicial = {
  inputPhone: "",
  inputMail: "",
};

function rootReducer(state = estadoInicial, accion) {
  switch (accion.type) {
    case typeState.STATE_INPUT_PHONE:
      return {
        ...state,
        inputPhone: accion.payload,
      };
    case typeState.STATE_INPUT_MAIL:
      return {
        ...state,
        inputMail: accion.payload,
      };
    default:
      return state;
  }
}
export default rootReducer;
