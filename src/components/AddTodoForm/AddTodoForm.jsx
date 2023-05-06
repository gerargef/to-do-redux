import React, { useState } from 'react'
import s from './AddTodoForm.module.css'
import { addTodo, filterIsDoneTodo } from '../../store/actions/creators/todo'
import { useDispatch } from 'react-redux'

function AddTodoForm() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const addTodoItem = (content) => {
    if (!content) return
    dispatch(addTodo(content))
    setInputValue('');
  }

  const filterTodoItem = (e) => {
   dispatch(filterIsDoneTodo(e.target.value))
  }
  return (
    <div className={s.form}>
      <input className={s.input} value={inputValue} type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button className={s.button} onClick={() => addTodoItem(inputValue)}>Добавить новую задачу</button>
      <select  className={s.select} name='isDone' onChange={(e) => filterTodoItem(e)}>
        <option value="all">Выберите фильтр</option>
        <option className={s.select__option} value="actual">Актуальные</option>
        <option value="done">Выполненые</option>
      </select>
    </div>
  )
}

export default AddTodoForm