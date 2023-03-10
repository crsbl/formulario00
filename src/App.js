import logo from "./logo.svg";
import formSurvey from "./img/form_survey_icon.svg";
import { useDispatch, useSelector } from "react-redux";
import typeGlobal from "./state/global/type";
import Modal from "./components/modal";
import ModalAlert from "./components/modalAlert";
import "./App.css";
import "./AppResponsive.css";

function App() {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(selector);
  return (
    <>
      <div className="App">
        <Modal />

        {selector.global.ModalAlert.state === true && (
          <ModalAlert
            type={selector.global.ModalAlert.type}
            message={selector.global.ModalAlert.message}
          />
        )}

        <header className="App-header">
          <img src={formSurvey}></img> <h2>Formulario en proceso</h2>
        </header>
        <main>
          <section>
            {selector.global.arraySelection.map((listArraySelection, index) => {
              return (
                <div>
                  <h2>{index + 1}</h2>
                  <h2
                    style={
                      selector.global.stateSelection == index
                        ? { color: "blue" }
                        : {}
                    }
                  >
                    {listArraySelection.name}
                  </h2>
                </div>
              );
            })}
          </section>
          <section>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              {selector.global.arraySelection.map(
                (listArraySelection, index) => {
                  return (
                    selector.global.stateSelection === index &&
                    listArraySelection.component
                  );
                }
              )}
              <div>
                <button
                  disabled={selector.global.stateSelection === 0 ? true : false}
                  onClick={() => {
                    dispatch({
                      type: typeGlobal.CHANGE_GLOBAL_STATE_SELECTION,
                      payload: selector.global.stateSelection - 1,
                    });
                    dispatch({
                      type: typeGlobal.CHANGE_GLOBAL_STATE_MODAL_ALERT,
                      payload: {
                        state: false,
                        type: "",
                        message: "",
                      },
                    });
                  }}
                >
                  Atras
                </button>
                <button
                  onClick={() => {
                    const expressionMail = /\S+@\S+\.\S+/;
                    const expressionName = /^[a-zA-Z\s]*$/;
                    switch (selector.global.stateSelection) {
                      case 0:
                        if (
                          !selector.personalInformation.comboBoxCivilStatus
                            .selection ||
                          !selector.personalInformation.comboBoxGender
                            .selection ||
                          !selector.personalInformation.inputAge ||
                          !selector.personalInformation.inputLastName ||
                          !selector.personalInformation.inputName ||
                          !expressionName.test(
                            selector.personalInformation.inputName
                          ) ||
                          !expressionName.test(
                            selector.personalInformation.inputLastName
                          )
                        ) {
                          dispatch({
                            type: typeGlobal.CHANGE_GLOBAL_STATE_MODAL_ALERT,
                            payload: {
                              state: true,
                              type: "error",
                              message: "Faltan datos o estan erroneos",
                            },
                          });
                        } else {
                          dispatch({
                            type: typeGlobal.CHANGE_GLOBAL_STATE_MODAL_ALERT,
                            payload: {
                              state: false,
                              type: "",
                              message: "",
                            },
                          });
                          dispatch({
                            type: typeGlobal.CHANGE_GLOBAL_STATE_SELECTION,
                            payload: 1,
                          });
                        }
                        break;
                      case 1:
                        if (
                          !selector.contactInformation.inputPhone ||
                          !expressionMail.test(
                            selector.contactInformation.inputMail
                          )
                        ) {
                          dispatch({
                            type: typeGlobal.CHANGE_GLOBAL_STATE_MODAL_ALERT,
                            payload: {
                              state: true,
                              type: "error",
                              message: "Faltan datos o estan erroneos",
                            },
                          });
                        } else {
                          dispatch({
                            type: typeGlobal.CHANGE_GLOBAL_STATE_SELECTION,
                            payload: 2,
                          });
                          dispatch({
                            type: typeGlobal.CHANGE_GLOBAL_STATE_MODAL_ALERT,
                            payload: {
                              state: false,
                              type: "",
                              message: "",
                            },
                          });
                        }
                        break;
                      case 2:
                        if (
                          !selector.shipmentInformation.inputCountry ||
                          !selector.shipmentInformation.inputCity ||
                          !selector.shipmentInformation.inputAddress ||
                          !selector.shipmentInformation.postalCode
                        ) {
                          dispatch({
                            type: typeGlobal.CHANGE_GLOBAL_STATE_MODAL_ALERT,
                            payload: {
                              state: true,
                              type: "error",
                              message: "Faltan datos",
                            },
                          });
                        } else {
                          dispatch({
                            type: typeGlobal.CHANGE_GLOBAL_STATE_MODAL,
                            payload: true,
                          });
                          dispatch({
                            type: typeGlobal.CHANGE_GLOBAL_STATE_MODAL_ALERT,
                            payload: {
                              state: true,
                              type: "accept",
                              message: "Formulario terminado",
                            },
                          });
                        }
                        break;
                      default:
                        break;
                    }
                  }}
                >
                  Continuar
                </button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
