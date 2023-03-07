import typeState from "./type";

const estadoInicial = {
  inputCountry: "",
  inputCity: "",
  inputAddress: "",
  postalCode: "",
};

function rootReducer(state = estadoInicial, accion) {
    console.log(accion)
  switch (accion.type) {
    case typeState.STATE_INPUT_COUNTRY:
      return {
        ...state,
        inputCountry: accion.payload,
      };
    case typeState.STATE_INPUT_CITY:
      return {
        ...state,
        inputCity: accion.payload,
      };
    case typeState.STATE_INPUT_ADDRESS:
      return {
        ...state,
        inputAddress: accion.payload,
      };
    case typeState.STATE_INPUT_POSTAL_CODE:
      return {
        ...state,
        postalCode: accion.payload,
      };
    default:
      return state;
  }
}
export default rootReducer;
