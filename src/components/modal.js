import "../style/modal/index.css";
import "../style/modal/indexResponsive.css";
import { useDispatch, useSelector } from "react-redux";
const Modal = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  return (
    <div
      style={
        selector.global.stateModal ? { display: "flex" } : { display: "none" }
      }
      className="divContainerModal00"
    >
      <div>
        <div>
          <h3>Nombre</h3>
          <h3>{selector.personalInformation.inputName}</h3>
        </div>
        <div>
          <h3>Apellidos</h3>
          <h3>{selector.personalInformation.inputLastName}</h3>
        </div>
        <div>
          <h3>Edad</h3>
          <h3>{selector.personalInformation.inputAge}</h3>
        </div>
        <div>
          <h3>Genero</h3>
          <h3>{selector.personalInformation.comboBoxGender.selection}</h3>
        </div>
        <div>
          <h3>Fecha de nacimiento</h3>
          <h3>{selector.personalInformation.dateOfBirth}</h3>
        </div>{" "}
        <div>
          <h3>Estado civil</h3>
          <h3>{selector.personalInformation.comboBoxCivilStatus.selection}</h3>
        </div>
        <div>
          <h3>Telefono</h3>
          <h3>{selector.contactInformation.inputPhone}</h3>
        </div>
        <div>
          <h3>Correo</h3>
          <h3>{selector.contactInformation.inputMail}</h3>
        </div>
        <div>
          <h3>Pais</h3>
          <h3>{selector.shipmentInformation.inputCountry}</h3>
        </div>
        <div>
          <h3>Ciudad</h3>
          <h3>{selector.shipmentInformation.inputCity}</h3>
        </div>
        <div>
          <h3>Dirección</h3>
          <h3>{selector.shipmentInformation.inputAddress}</h3>
        </div>
        <div>
          <h3>Código postal</h3>
          <h3>{selector.shipmentInformation.postalCode}</h3>
        </div>
      </div>
    </div>
  );
};
export default Modal;
