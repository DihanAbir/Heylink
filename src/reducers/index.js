import { combineReducers } from "@reduxjs/toolkit";
import controllerSlice from "../Slices/controllerSlice";
import getDataReducer from "../Slices/getDataSlice";
import linksSlice from "../Slices/linksSlice";
import socialSlice from "../Slices/socialSlice";

const rootReducer = combineReducers({
  getData: getDataReducer,
  controllerSlice: controllerSlice,
  linksSlice: linksSlice,
  socialSlice: socialSlice,
});

export default rootReducer;
