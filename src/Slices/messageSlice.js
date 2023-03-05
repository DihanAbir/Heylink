import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messageText: '',
    successMessageText: '',
    namePlaceholderText: '',
    emailPlaceholderText: '',
    phoneNumberPlaceholderText: '',
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
        setNamePlaceholderText: (state, action) => {
            state.namePlaceholderText = action.payload;
        },
        setEmailPlaceholderText: (state, action) => {
            state.emailPlaceholderText = action.payload;
        },
        setPhoneNumberPlaceholderText: (state, action) => {
            state.phoneNumberPlaceholderText = action.payload;
        },
    },
});

export const {
    setMessageText,
    setSuccessMessageText,
    setNamePlaceholderText,
    setEmailPlaceholderText,
    setPhoneNumberPlaceholderText
} = messageSlice.actions;
export default messageSlice.reducer;
