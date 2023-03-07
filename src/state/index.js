import { combineReducers } from "redux";
import personalInformation from "./personalInformation/index";
import contactInformation from "./contactInformation/index";
import shipmentInformation from "./shipmentInformation/index";
import global from "./global/index.js";

export default combineReducers({
  personalInformation,
  contactInformation,
  shipmentInformation,
  global,
});
