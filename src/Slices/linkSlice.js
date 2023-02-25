import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userPrompt: "Dihan Abir",
  name: "dihan"
};

export const appiconSlice = createSlice({
  name: "appiconTools",
  initialState, 
  reducers: {
    setPromptReducer: (state, action) => {
      state.userPrompt = action.payload.userPrompt;
    },
    setGenImgReducer: (state, action) => {
      state.imageGen = action.payload.imageGen;
    },
  },
});

export const { setGenImgReducer, setPromptReducer } = appiconSlice.actions;
export default appiconSlice.reducer;
