import { combineReducers } from "redux";

import client from "./client";
import travau from "./travau";
import facture from "./facture";
import convocation from "./convocation";
import pv from "./pv";
import lettreCharge from "./lettreCharge";

const rootReducer = combineReducers({
  client,
  travau,
  facture,
  convocation,
  pv,
  lettreCharge
});

export default rootReducer;
