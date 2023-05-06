import { ADD_TODO, DELETE_TODO, FILTER_TODO, TOGGLE_TODO } from "../types/todo";

let previousId = 1;

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: { id: ++previousId, content },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id: id },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id: id },
});

export const filterIsDoneTodo = (isDone) => ({
  type: FILTER_TODO,
  payload: { isDone: isDone },
});
