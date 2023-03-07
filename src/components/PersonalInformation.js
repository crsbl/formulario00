import "../style/PersonalInformation/index.css";
import "../style/PersonalInformation/indexResponsive.css";
import typePersonalInformation from "../state/personalInformation/type";
import { useDispatch, useSelector } from "react-redux";

const PersonalInformation = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.personalInformation);

  const changeInputs = (e, typeSelection) => {
    dispatch({
      type: typeSelection,
      payload: e.currentTarget.value,
    });
  };

  return (
    <div className="divContainerPersonalInformation00">
      <h1>Información de perfil</h1>
  <div>
        <label>
          Nombres:
          <input
            value={selector.inputName}
            onChange={(e) => {
              changeInputs(e, typePersonalInformation.STATE_INPUT_NAME);
            }}
            type="text"
          />
        </label>

        <label>
          Apellidos:
          <input
            value={selector.inputLastName}
            onChange={(e) => {
              changeInputs(e, typePersonalInformation.STATE_INPUT_LAST_NAME);
            }}
            type="text"
          />
        </label>

        <label>
          Edad:
          <input
            value={selector.inputAge}
            onChange={(e) => {
              changeInputs(e, typePersonalInformation.STATE_INPUT_AGE);
            }}
            type="number"
          />
        </label>

        <label>
          Género:
          <div>
            <input
              readOnly
              value={selector.comboBoxGender.selection}
              onClick={() => {
                if (selector.comboBoxGender.stateComboBox) {
                  dispatch({
                    type: typePersonalInformation.STATE_COMBOBOX_GENDER,
                    payload: false,
                  });
                } else {
                  dispatch({
                    type: typePersonalInformation.STATE_COMBOBOX_GENDER,
                    payload: true,
                  });
                }
              }}
            ></input>
            <div
              style={
                selector.comboBoxGender.stateComboBox
                  ? { display: "flex" }
                  : { display: "none" }
              }
            >
              <div>
                {selector.comboBoxGender.arrayGender.map((listStateGender) => {
                  return (
                    <h3
                      onClick={() => {
                        dispatch({
                          type: typePersonalInformation.STATE_COMBOBOX_GENDER_SELECTION,
                          payload: listStateGender,
                        });
                      }}
                    >
                      {listStateGender}
                    </h3>
                  );
                })}
              </div>
            </div>
          </div>
        </label>

        <label>
          Fecha de nacimiento:
          <input
            value={selector.dateOfBirth}
            onChange={(e) => {
              changeInputs(
                e,
                typePersonalInformation.STATE_INPUT_DATE_OF_BIRTH
              );
            }}
            type="date"
          />
        </label>

        <label>
          Estado civil:
          <div>
            <input
              readOnly
              value={selector.comboBoxCivilStatus.selection}
              onClick={() => {
                if (selector.comboBoxCivilStatus.stateComboBox) {
                  dispatch({
                    type: typePersonalInformation.STATE_COMBOBOX_DATA_OF_BIRTH,
                    payload: false,
                  });
                } else {
                  dispatch({
                    type: typePersonalInformation.STATE_COMBOBOX_DATA_OF_BIRTH,
                    payload: true,
                  });
                }
              }}
            ></input>
            <div
              style={
                selector.comboBoxCivilStatus.stateComboBox
                  ? { display: "flex" }
                  : { display: "none" }
              }
            >
              <div>
                {selector.comboBoxCivilStatus.arrayCivilStatus.map(
                  (listArrayCivilStatus) => {
                    return (
                      <h3
                        onClick={() => {
                          dispatch({
                            type: typePersonalInformation.STATE_COMBOBOX_CIVIL_STATUS_SELECTION,
                            payload: listArrayCivilStatus,
                          });
                        }}
                      >
                        {listArrayCivilStatus}
                      </h3>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </label>
        </div>
    </div>
  );
};

export default PersonalInformation;
