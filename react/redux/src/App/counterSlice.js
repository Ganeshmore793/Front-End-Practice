import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:0,
    reducers:{
        increament:(state)=>{
            return state+1;
        },
        decrement:(state)=>{
            return state-1;
        }

    }

});

export const counterReducer=counterSlice.reducer;
export const {increament , decrement} = counterSlice.actions;