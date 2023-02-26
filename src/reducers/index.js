import { combineReducers } from "@reduxjs/toolkit";
import controllerSlice from "../Slices/controllerSlice";
import gallerySlice from "../Slices/gallerySlice";
import getDataReducer from "../Slices/getDataSlice";
import linksSlice from "../Slices/linksSlice";
import locationSlice from "../Slices/locationSlice";
import menuSlice from "../Slices/menuSlice";
import musicSlice from "../Slices/musicSlice";
import socialSlice from "../Slices/socialSlice";

const rootReducer = combineReducers({
  getData: getDataReducer,
  controllerSlice: controllerSlice,
  linksSlice: linksSlice,
  socialSlice: socialSlice,
  gallerySlice: gallerySlice,
  menuSlice: menuSlice,
  locationSlice: locationSlice,
  musicSlice: musicSlice,
});

export default rootReducer;
