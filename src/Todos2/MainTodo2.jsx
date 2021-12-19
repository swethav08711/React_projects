import React from "react"
import { useDispatch } from "react-redux"
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"
import { v4 as uuid } from "uuid"
import { adTodo } from "../ReduxTodo1/action"
const MainTodo2 = () => {
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

export default MainTodo2
