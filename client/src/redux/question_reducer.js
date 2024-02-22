import { createSlice } from "@reduxjs/toolkit";

export const questionReducer = createSlice({
  name: "question",
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    startExamAction: (state, action) => {
      return {
        ...state,
        queue: action.payload,
      };
    },
    moveNextAction: (state) => {
      return {
        ...state,
        trace: state.trace + 1,
      };
    },
    movePrevQuestion: (state) => {
      return {
        ...state,
        trace: state.trace - 1,
      };
    },
    resetAllAction: () => {
      return {
        queue: [],
        answers: [],
        trace: 0,
      };
    },
  },
});

export const {
  startExamAction,
  moveNextAction,
  movePrevQuestion,
  resetAllAction,
} = questionReducer.actions;

export default questionReducer.reducer;
