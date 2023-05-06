import {
  ADD_TODO,
  DELETE_TODO,
  FILTER_TODO,
  TOGGLE_TODO,
} from "../actions/types/todo";

const initialState = {
  allTodos: [
    {
      id: 1,
      done: false,
      content: "Создать TODO-приложение, используя Redux",
    },
  ],
  filteredTodos: [
    {
      id: 1,
      done: false,
      content: "Создать TODO-приложение, используя Redux",
    },
  ],
  filter: "all",
};

const filterFunction = (filter, todos) => {
  console.log(filter, todos);
  if (filter === "actual") {
    return [...todos.filter((todo) => todo.done === false)];
  } else if (filter === "done") {
    return [...todos.filter((todo) => todo.done === true)];
  } else return [...todos];
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const todosWithNewTodo = [
        ...state.allTodos,
        {
          id: action.payload.id,
          done: false,
          content: action.payload.content,
        },
      ];
      return {
        ...state,
        allTodos: todosWithNewTodo,
        filteredTodos: filterFunction(state.filter, todosWithNewTodo),
      };
    case TOGGLE_TODO: {
      const id = action.payload.id;
      return {
        ...state,
        allTodos: [
          ...state.allTodos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : { ...todo }
          ),
        ],
        filteredTodos: [
          ...state.allTodos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : { ...todo }
          ),
        ],
      };
    }
    case DELETE_TODO: {
      const id = action.payload.id;
      return {
        ...state,
        allTodos: [...state.allTodos.filter((todo) => todo.id !== id)],
        filteredTodos: [...state.allTodos.filter((todo) => todo.id !== id)],
      };
    }

    case FILTER_TODO: {
      const isDone = action.payload.isDone;
      return {
        ...state,
        filteredTodos: filterFunction(isDone, state.allTodos),
        filter: isDone,
      };
    }
    default:
      return state;
  }
};
