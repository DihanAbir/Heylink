import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    render: true,
    linksData: []
};

export const getDataSlice = createSlice({
    name: "afd",
    initialState,
    reducers: {
        setRenderReducer: (state, action) => {
            state.render = action.payload.render;
        },
        setLinksData: (state, action) => {
            state.linksData = action.payload;
        },
    }
});

export const {
    setRenderReducer,
    setLinksData
} = getDataSlice.actions;
export default getDataSlice.reducer;
