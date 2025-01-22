import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:0,
    reducers:{
        increament:(stateCounter)=>{
            return stateCounter+1;
        },
        decrement:(stateCounter)=>{
            return stateCounter-1;
        }

    }

});

export const countReducer=counterSlice.reducer;
export const {increament , decrement} = counterSlice.actions;