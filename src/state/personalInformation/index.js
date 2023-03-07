import typeState from "./type";

let dayCurrent = new Date();
let day =
  dayCurrent.getDate() > 10 ? dayCurrent.getDate() : "0" + dayCurrent.getDate();
let month =
  dayCurrent.getMonth() + 1 > 10
    ? dayCurrent.getMonth() + 1
    : "0" + (dayCurrent.getMonth() + 1);
let year = dayCurrent.getFullYear();

const estadoInicial = {
  inputName: "",
  inputLastName: "",
  inputAge: "",
  comboBoxGender: {
    selection: "",
    stateComboBox: false,
    arrayGender: ["Masculino", "Femenino"],
  },
  dateOfBirth: `${year}-${month}-${day}`,
  comboBoxCivilStatus: {
    selection: "",
    stateComboBox: false,
    arrayCivilStatus: ["Soltero(a)", "Casado(a)", "Viudo(a)"],
  },
};

function rootReducer(state = estadoInicial, accion) {
  console.log(accion);
  switch (accion.type) {
    case typeState.STATE_COMBOBOX_GENDER:
      return {
        ...state,
        comboBoxGender: {
          ...state.comboBoxGender,
          stateComboBox: accion.payload,
        },
      };
    case typeState.STATE_COMBOBOX_DATA_OF_BIRTH:
      return {
        ...state,
        comboBoxCivilStatus: {
          ...state.comboBoxCivilStatus,
          stateComboBox: accion.payload,
        },
      };
    case typeState.STATE_INPUT_NAME:
      return {
        ...state,
        inputName: accion.payload,
      };
    case typeState.STATE_INPUT_LAST_NAME:
      return {
        ...state,
        inputLastName: accion.payload,
      };
    case typeState.STATE_INPUT_AGE:
      return {
        ...state,
        inputAge: accion.payload,
      };
    case typeState.STATE_INPUT_DATE_OF_BIRTH:
      return {
        ...state,
        dateOfBirth: accion.payload,
      };
    case typeState.STATE_COMBOBOX_GENDER_SELECTION:
      return {
        ...state,
        comboBoxGender: { ...state.comboBoxGender, selection: accion.payload },
      };
    case typeState.STATE_COMBOBOX_CIVIL_STATUS_SELECTION:
      return {
        ...state,
        comboBoxCivilStatus: { ...state.comboBoxCivilStatus, selection: accion.payload },
      };

    default:
      return state;
  }
}
export default rootReducer;
