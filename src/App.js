import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import typeGlobal from "./state/global/type";
import Modal from "./components/modal";
import "./App.css";

function App() {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(selector);
  return (<>
    <div className="App">
      <Modal />
      <header className="App-header">
        <h2>Formulario en proceso</h2>
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
            {selector.global.arraySelection.map((listArraySelection, index) => {
              return (
                selector.global.stateSelection === index &&
                listArraySelection.component
              );
            })}
            <div>
              <button
                disabled={selector.global.stateSelection === 0 ? true : false}
                onClick={() => {
                  dispatch({
                    type: typeGlobal.CHANGE_GLOBAL_STATE_SELECTION,
                    payload: selector.global.stateSelection - 1,
                  });
                }}
              >
                Atras
              </button>
              <button
                onClick={() => {
                  switch (selector.global.stateSelection) {
                    case 0:
                      if (
                        !selector.personalInformation.comboBoxCivilStatus
                          .selection ||
                        !selector.personalInformation.comboBoxGender
                          .selection ||
                        !selector.personalInformation.inputAge ||
                        !selector.personalInformation.inputLastName ||
                        !selector.personalInformation.inputName
                      ) {
                        alert("faltan datos");
                      } else {
                        dispatch({
                          type: typeGlobal.CHANGE_GLOBAL_STATE_SELECTION,
                          payload: 1,
                        });
                      }
                      break;
                    case 1:
                      if (
                        !selector.contactInformation.inputPhone ||
                        !selector.contactInformation.inputMail
                      ) {
                        alert("faltan datos");
                      } else {
                        dispatch({
                          type: typeGlobal.CHANGE_GLOBAL_STATE_SELECTION,
                          payload: 2,
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
                        alert("faltan datos");
                      } else {
                        dispatch({
                          type: typeGlobal.CHANGE_GLOBAL_STATE_MODAL,
                          payload: true,
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
    </div></>
  );
}

export default App;
