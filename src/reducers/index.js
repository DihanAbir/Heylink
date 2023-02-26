import { combineReducers } from "@reduxjs/toolkit";
import getDataReducer from "../Slices/getDataSlice";
import linksSlice from "../Slices/linksSlice";

const rootReducer = combineReducers({
  getData: getDataReducer,
  linksSlice: linksSlice,
});

export default rootReducer;
