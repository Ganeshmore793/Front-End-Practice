import { createSlice } from "@reduxjs/toolkit";
import { quizes } from "../utils/data";

const quizeSlice = createSlice({
  name: "quiz",
  initialState: {
    quizes,
  },
  reducers: {
    addQuestion: () => {},
  },
});

export const quizReducer = quizeSlice.reducer;
export const { addQuestion } = quizeSlice.actions;
