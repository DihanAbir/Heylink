import { combineReducers } from "@reduxjs/toolkit";
import controllerSlice from "../Slices/controllerSlice";
import gallerySlice from "../Slices/gallerySlice";
import getDataReducer from "../Slices/getDataSlice";
import linksSlice from "../Slices/linksSlice";
import menuSlice from "../Slices/menuSlice";
import socialSlice from "../Slices/socialSlice";

const rootReducer = combineReducers({
  getData: getDataReducer,
  controllerSlice: controllerSlice,
  linksSlice: linksSlice,
  socialSlice: socialSlice,
  gallerySlice: gallerySlice,
  menuSlice: menuSlice,
});

export default rootReducer;
