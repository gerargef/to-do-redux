import React from 'react'
import { useSelector } from 'react-redux'
import { todoFilterSelector, todoFilteredSelector, todoSelector } from '../../store/reducers/selectors/todo'
import TodoItem from '../TodoItem/TodoItem'
import s from './TodoList.module.css'
function TodoList() {
  const todos = useSelector(todoSelector);
  const filteredTodos = useSelector(todoFilteredSelector)
  return (
    <div className={s.todoList}>
      {filteredTodos.map((todo) => <TodoItem key={todo.id} {...todo}/>)}
    </div>
  )
}

export default TodoList