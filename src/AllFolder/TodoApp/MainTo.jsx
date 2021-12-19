import React from "react"
import { useDispatch } from "react-redux"
import { adTodo } from "../../ReduxTodo1/todos/action"

import { v4 as uuid } from "uuid"
import TodoInput from "../../Todos2/TodoInput"
import TodoList from "../../Todos2/TodoList"

const MainTo = () => {
  const dispatch = useDispatch()
  const handleAdd = text => {
    const action = adTodo({
      title: text,
      status: false,
      id: uuid(),
    })
    dispatch(action)
  }
  return (
    <div>
      <TodoInput onAdd={handleAdd} />
      <TodoList />
    </div>
  )
}

export default MainTo
