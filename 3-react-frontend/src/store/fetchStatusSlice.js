import { createSlice } from "@reduxjs/toolkit";



const fetchStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchDone: false,
        currentlyFetching: false
    },
    reducers: {
        markFetchDone: (state) => {
            void( state.fetchDone = true);
            // return state.fetchDone = true;
        },
        markFetchingStarted: (state) => {
            void (state.currentlyFetching = true);
            // return state.currentlyFetching = true;
        },
        markFetchingFinished: (state) => {
            void (state.currentlyFetching = false);
            // return state.currentlyFetching = false;
        }
    }
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;

