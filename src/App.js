import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import Modal from './components/modal';
import "./App.css";

function App() {
    const selector = useSelector((state) => state.global);

  return (
    <div  className="App">
      <Modal/>
      <header className="App-header">
        <h1>Formulario en proceso</h1>
      </header>
      <main>
        <section>
          {selector.arraySelection.map((listArraySelection, index) => {
            return (
              <div>
                <h2>{index + 1}</h2>
                <h2 style={selector.stateSelection == index ? {color:"blue"} : {}}>{listArraySelection.name}</h2>
              </div>
            );
          })}
        </section>
        <section>
          {selector.arraySelection.map((listArraySelection, index) => {
         return (
              selector.stateSelection === index &&
              listArraySelection.component
            ); 
          })}
        </section>
      </main>
    </div>
  );
}

export default App;
