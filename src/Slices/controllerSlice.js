import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: '',
    deleteModal: '',
    openInputChange1: '',
    openInputChange2: '',
    uploadImageModal: '',
    openFastLinkModal: ''
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
        setUploadImageModal: (state, action) => {
            state.uploadImageModal = action.payload;
        },
        setOpenFastLinkModal: (state, action) => {
            state.openFastLinkModal = action.payload;
        },
    },
});

export const {
    setOpen,
    setDeleteModal,
    setOpenInputChange1,
    setOpenInputChange2,
    setUploadImageModal,
    setOpenFastLinkModal,
} = controllerSlice.actions;
export default controllerSlice.reducer;
