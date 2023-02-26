import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    socials: [{
        id: "1",
        name: "Facebook",
        url: "https://facebook.com/",
        img: "https://cdn-icons-png.flaticon.com/128/5968/5968764.png",
    },
    {
        id: "2",
        name: "WhatsUp",
        url: "https://whatsup.com/",
        img: "https://cdn-icons-png.flaticon.com/128/5968/5968764.png",
    },
    {
        id: "3",
        name: "LinkedIn",
        url: "https://linkedin.com/",
        img: "https://cdn-icons-png.flaticon.com/128/5968/5968764.png",
    },
    {
        id: "4",
        name: "twitter",
        url: "https://twitter.com/",
        img: "https://cdn-icons-png.flaticon.com/128/5968/5968764.png",
    },
    {
        id: "5",
        name: "twitter",
        url: "https://twitter.com/",
        img: "https://cdn-icons-png.flaticon.com/128/5968/5968764.png",
    },
    {
        id: "6",
        name: "twitter",
        url: "https://twitter.com/",
        img: "https://cdn-icons-png.flaticon.com/128/5968/5968764.png",
    }],
    open: '',
    selectedSocial: 'Select Popular Social Link',
    usernamePlacehoder: 'Paste Your Social Link here',
    socialImg: '',
    search: false,
    inputError: '',
    socialLinkName: { id: '', linkName: '' },
};

export const socialSlice = createSlice({
    name: "socialSlice",
    initialState,
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        setSelectedSocial: (state, action) => {
            state.selectedSocial = action.payload;
        },
        setUsernamePlaceholder: (state, action) => {
            state.usernamePlacehoder = action.payload;
        },
        setSocialImg: (state, action) => {
            state.socialImg = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setInputError: (state, action) => {
            state.inputError = action.payload;
        },
        setSocialLinkName: (state, action) => {
            state.socialLinkName = action.payload;
        },

    },
});

export const {
    setOpen,
    setSelectedSocial,
    setUsernamePlaceholder,
    setSocialImg,
    setSearch,
    setInputError,
    setSocialLinkName,
} = socialSlice.actions;
export default socialSlice.reducer;
