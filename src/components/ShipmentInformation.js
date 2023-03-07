import "../style/ShipmentInformation/index.css";
import typeContactInformation from "../state/shipmentInformation/type";
import { useDispatch, useSelector } from "react-redux";

const ShipmentInformation = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.shipmentInformation);
  console.log(selector);
  const changeInputs = (e, typeSelection) => {
    dispatch({
      type: typeSelection,
      payload: e.currentTarget.value,
    });
  };

  return (
    <div className="divContainerShipmentInformation00">
      <h1>Información de envío</h1>
      <div>
        <label>
          País:
          <input
            value={selector.inputCountry}
            onChange={(e) => {
              changeInputs(e, typeContactInformation.STATE_INPUT_COUNTRY);
            }}
            type="text"
            name="name"
          />
        </label>
        <label>
          Ciudad:
          <input
            value={selector.inputCity}
            onChange={(e) => {
              changeInputs(e, typeContactInformation.STATE_INPUT_CITY);
            }}
            type="text"
            name="name"
          />
        </label>
        <label>
          Dirección:
          <input
            value={selector.inputAddress}
            onChange={(e) => {
              changeInputs(e, typeContactInformation.STATE_INPUT_ADDRESS);
            }}
            type="text"
            name="name"
          />
        </label>
        <label>
          Código postal:
          <input
            value={selector.inputPostalCode}
            onChange={(e) => {
              changeInputs(e, typeContactInformation.STATE_INPUT_POSTAL_CODE);
            }}
            type="text"
            name="name"
          />
        </label>
        </div>
    </div>
  );
};

export default ShipmentInformation;
