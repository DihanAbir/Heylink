import { combineReducers } from "@reduxjs/toolkit";

import appiconReducer from "../Slices/apiSlice";

const rootReducer = combineReducers({
  // Add your reducers here
  appiconTools: appiconReducer,
});

export default rootReducer;
