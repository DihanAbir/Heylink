import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: '',
    deleteModal: '',
    openInputChange1: '',
    openInputChange2: '',
};

export const controllerSlice = createSlice({
    name: "controllerSlice",
    initialState,
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        setDeleteModal: (state, action) => {
            state.deleteModal = action.payload;
        },
        setOpenInputChange1: (state, action) => {
            state.openInputChange1 = action.payload;
        },
        setOpenInputChange2: (state, action) => {
            state.openInputChange2 = action.payload;
        },
    },
});

export const {
    setOpen,
    setDeleteModal,
    setOpenInputChange1,
    setOpenInputChange2,
} = controllerSlice.actions;
export default controllerSlice.reducer;
