import PersonalInformation from "../../components/PersonalInformation";
import ContactInformation from "../../components/ContactInformation";
import ShipmentInformation from "../../components/ShipmentInformation";
import typeState from "./type";

const estadoInicial = {
  stateSelection: 0,
  arraySelection: [
    { name: "Información de perfil", component: <PersonalInformation /> },
    { name: "Información de contacto", component: <ContactInformation /> },
    { name: "Información de envío", component: <ShipmentInformation /> },
  ],
  stateModal: false,
  ModalAlert: { state: false, type: "", message: "" },
};

function rootReducer(state = estadoInicial, accion) {
  switch (accion.type) {
    case typeState.CHANGE_GLOBAL_STATE_SELECTION:
      return {
        ...state,
        stateSelection: accion.payload,
      };
    case typeState.CHANGE_GLOBAL_STATE_MODAL:
      return {
        ...state,
        stateModal: accion.payload,
      };
    case typeState.CHANGE_GLOBAL_STATE_MODAL_ALERT:
      return {
        ...state,
        ModalAlert: {
          state: accion.payload.state,
          type: accion.payload.type,
          message: accion.payload.message,
        },
      };

    default:
      return state;
  }
}
export default rootReducer;
