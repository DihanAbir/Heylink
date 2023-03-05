import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messageText: '',
    successMessageText: '',
};

export const messageSlice = createSlice({
    name: "messageSlice",
    initialState,
    reducers: {
        setMessageText: (state, action) => {
            state.messageText = action.payload;
        },
        setSuccessMessageText: (state, action) => {
            state.successMessageText = action.payload;
        },
    },
});

export const {
    setMessageText,
    setSuccessMessageText,
} = messageSlice.actions;
export default messageSlice.reducer;
