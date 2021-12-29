import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import TodoInput from "../Todos2/TodoInput"
import TodoList from "../Todos2/TodoList"

import { getTodo } from "../ReduxTodo1/todos/action"
import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
const Home = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth.isAuth)
  const token = useSelector(state => state.auth.token)
  if (!isAuth) {
    return <Redirect to="/login" />
  }
  useEffect(() => {
    dispatch(getTodo())
  }, [dispatch])
  return (
    <div>
      <div>{token}</div>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export { Home }
