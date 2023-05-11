import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import s from './TodoList.module.css'
import { useGetAllTodosQuery } from '../../services/todo'
function TodoList() {
  const {data, isError, isLoading} = useGetAllTodosQuery()


  if (isLoading) {
    return <p className={s.message}>Загрузка...</p>
  }
  if (isError) {
    return <p className={s.message}>{isError.message}</p>
  }

  if (!isLoading && !data?.length) {
    return <p className={s.message}>Список задач пуст</p>
  }
 
  return (
      
    <div className={s.todoList}>
      {data.map((todo) => <TodoItem key={todo.id} {...todo}/>)}
    </div>
  )
}

export default TodoList