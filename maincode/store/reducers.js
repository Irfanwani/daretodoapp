import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: ({ todos }, { payload }) => {
      todos.push(payload);
    },
    removeTodo: ({ todos }, { payload }) => {
      todos.splice(payload, 1);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
