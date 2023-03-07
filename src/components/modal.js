import "../style/modal/index.css";
import { useDispatch, useSelector } from "react-redux";
const Modal = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.global);

  return (
    <div
      style={selector.stateModal ? { display: "flex" } : { display: "none" }}
      className="divContainerModal00"
    >

        
    </div>
  );
};
export default Modal;
