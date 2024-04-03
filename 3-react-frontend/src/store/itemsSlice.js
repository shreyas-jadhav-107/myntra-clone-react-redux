import { createSlice } from "@reduxjs/toolkit";



const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addInitialItems: (state, action) => {
            // console.log("Adding initial items reducer", state, action);
            // return action.payload; //! ERROR
            return action.payload;
        }
    }
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice;

