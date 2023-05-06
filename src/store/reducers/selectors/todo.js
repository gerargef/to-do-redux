export const todoSelector = (store) => store.todo.allTodos;
export const todoFilteredSelector = (store) => store.todo.filteredTodos;
export const todoFilterSelector = (store) => store.todo.filter;
export const todoByIdSelector = (store, id) => {
  const todos = todoSelector(store);
  return todos.find((todo) => todo.id === id);
};
