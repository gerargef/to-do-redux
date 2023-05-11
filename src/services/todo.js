import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://629470d963b5d108c18b87da.mockapi.io";

const DATA_TAG = { type: "Todos", id: "LIST" };

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => "todos",
      providesTags: (result = []) => [DATA_TAG],
    }),

    addTodo: builder.mutation({
      query: (body) => ({
        url: "todos",
        method: "POST",
        body,
      }),
      invalidatesTags: [DATA_TAG],
    }),

    toggleTodo: builder.mutation({
      query: (data) => ({
        url: `todos/${data.id}`,
        method: "PUT",
        body: {
          ...data,
          completed: !data.completed,
        },
      }),
      invalidatesTags: [DATA_TAG],
    }),

    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [DATA_TAG],
    }),
  }),
});

export const {
  useGetAllTodosQuery,
  useAddTodoMutation,
  useToggleTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
