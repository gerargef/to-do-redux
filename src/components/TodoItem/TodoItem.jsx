import React, { useState } from 'react'
import s from './TodoItem.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, toggleTodo } from '../../store/actions/creators/todo';
import classNames from 'classnames';
import {todoByIdSelector, todoSelector } from '../../store/reducers/selectors/todo';

function TodoItem({content, id, done}) {
  console.log(done);
  const dispatch = useDispatch();
  const toggleTodoItem = (id) => {
    dispatch(toggleTodo(id))
  }
  const deleteTodoItem = (id) => {
    dispatch(deleteTodo(id))
  }
  return (
    <div className={s.todoItem}>
        <div className={classNames(s.todoItem__content, done ? s.todoItem__content_done : '' )} onClick={() => {toggleTodoItem(id)}}>{content}</div>
        <span onClick={() => deleteTodoItem(id)}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.76475 0.888428C5.52455 0.888428 4.50983 1.73218 4.50983 2.76343H2.25492C1.01471 2.76343 0 3.60718 0 4.63843H15.7844C15.7844 3.60718 14.7697 2.76343 13.5295 2.76343H11.2746C11.2746 1.73218 10.2599 0.888428 9.01967 0.888428H6.76475ZM2.25492 6.51343V15.5322C2.25492 15.7384 2.43531 15.8884 2.68335 15.8884H13.1236C13.3717 15.8884 13.552 15.7384 13.552 15.5322V6.51343H11.2971V13.0759C11.2971 13.6009 10.8011 14.0134 10.1697 14.0134C9.5383 14.0134 9.04222 13.6009 9.04222 13.0759V6.51343H6.7873V13.0759C6.7873 13.6009 6.29122 14.0134 5.65984 14.0134C5.02846 14.0134 4.53238 13.6009 4.53238 13.0759V6.51343H2.27747H2.25492Z" fill="white"/>
    </svg>

            </span>

</div>

  )
}

export default TodoItem