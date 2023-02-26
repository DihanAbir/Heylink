import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    locations: [
        {
            id: '1',
            location: 'Thakurgaon, Bangladesh',
        },
        {
            id: '2',
            location: 'Thakurgaon, Bangladesh',
        },
        {
            id: '3',
            location: 'Thakurgaon, Bangladesh',
        },
    ],
    selectedLocation: '',
    search: false,
    newAddress: { id: '', address: '' },
    markersOnTheMapAddress: { id: '', address: '' }
};

export const locationSlice = createSlice({
    name: "locationSlice",
    initialState,
    reducers: {
        setSelectedLocation: (state, action) => {
            state.selectedLocation = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setNewAddress: (state, action) => {
            state.newAddress = action.payload;
        },
        setMarkersOnTheMapAddress: (state, action) => {
            state.markersOnTheMapAddress = action.payload;
        },
    },
});

export const {
    setSelectedLocation,
    setSearch,
    setNewAddress,
    setMarkersOnTheMapAddress
} = locationSlice.actions;
export default locationSlice.reducer;
