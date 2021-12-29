import React from "react"
import { shallowEqual, useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { loginUser } from "../ReduxTodo1/auth/action"
import { Login } from "../Todos2/Login"
const LoginPage = () => {
  const dispatch = useDispatch()
  const { isAuth, isLoading, isError, token } = useSelector(
    state => state.auth,
    shallowEqual
  )
  const handleLogin = ({ email, password }) => {
    dispatch(loginUser({ email, password }))
  }
  if (isAuth) {
    return <Redirect to="/" />
  }
  if (isLoading) {
    return <div>....loading</div>
  }
  return (
    <>
      <Login handleLogin={handleLogin} />
      {isError && <div>something went wrong</div>}
    </>
  )
}

export default LoginPage
