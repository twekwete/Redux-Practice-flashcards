import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "quizzes",
  initialState: { quizzes: {} },
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes[action.payload.id] = action.payload;
    },
  },
};

export const quizzesSlice = createSlice(options);
export const selectAllQuizzes = (state) => {
  return state.quizzes.quizzes;
};

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;