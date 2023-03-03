import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    render: true,
};

export const getDataSlice = createSlice({
    name: "afd",
    initialState,
    reducers: {
        setRenderReducer: (state, action) => {
            state.render = action.payload.render;
        },
    },
});

export const { setRenderReducer } = getDataSlice.actions;
export default getDataSlice.reducer;
