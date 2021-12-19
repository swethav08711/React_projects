import React from "react"
import { useDispatch } from "react-redux"
import TodoInput from "../Todos2/TodoInput"
import TodoList from "../Todos2/TodoList"
import { v4 as uuid } from "uuid"
import { adTodo } from "../ReduxTodo1/todos/action"
import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
const Home = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth.isAuth)
  const token = useSelector(state => state.auth.token)
  if (!isAuth) {
    return <Redirect to="/login" />
  }
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
      <div>{token}</div>
      <TodoInput onAdd={handleAdd} />
      <TodoList />
    </div>
  )
}

export { Home }
