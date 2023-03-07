import "../style/ContactInformation/index.css";
import typeGlobal from "../state/global/type";
import typeContactInformation from "../state/contactInformation/type";
import { useDispatch, useSelector } from "react-redux";

const ContactInformation = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.contactInformation);
console.log(selector)
  const changeInputs = (e, typeSelection) => {
    dispatch({
      type: typeSelection,
      payload: e.currentTarget.value,
    });
  };

  return (
    <div className="divContainerContactInformation00">
      <h1>Información de contacto</h1>
      <form>
        <label>
          Telefono:
          <input
            value={selector.inputPhone}
            onChange={(e) => {
              changeInputs(e, typeContactInformation.STATE_INPUT_PHONE);
            }}
            type="text"
          />
        </label>

        <label>
          Correo:
          <input
            value={selector.inputMail}
            onChange={(e) => {
              changeInputs(e, typeContactInformation.STATE_INPUT_MAIL);
            }}
            type="text"
          />
        </label>

        <button
          onClick={() => {
            dispatch({
              type: typeGlobal.CHANGE_GLOBAL_STATE_SELECTION,
              payload: 2,
            });
          }}
        >
          Continuar
        </button>
      </form>
    </div>
  );
};

export default ContactInformation;
