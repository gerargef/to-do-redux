import React, { useState } from 'react'
import s from './AddTodoForm.module.css'
import { useAddTodoMutation } from '../../services/todo';

function AddTodoForm() {
  const [inputValue, setInputValue] = useState('');
  const [addTodo, {isLoading}] = useAddTodoMutation();

  const addTodoItem = (title) => {
    if (!title) {
      return
    }
    addTodo({
      title,
      completed: false
    })
    setInputValue('')
  }

  if (isLoading) {
    return <p>Загрузка...</p>
  }
  return (
    <div className={s.form}>
      <input className={s.input} value={inputValue} type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button className={s.button} onClick={() => addTodoItem(inputValue)}>Добавить новую задачу</button>
    </div>
  )
}

export default AddTodoForm