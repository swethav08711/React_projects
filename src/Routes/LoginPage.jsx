import React from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { loginFailure, loginSucess } from "../ReduxTodo1/auth/action"
import { Login } from "../Todos2/Login"

const LoginPage = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth.isAuth)
  const handleLogin = ({ email, password }) => {
    if (email === "admin" && password === "admin") {
      const action = loginSucess("fakeToken")
      dispatch(action)
    } else {
      const action = loginFailure("wrong credentails")
      dispatch(action)
    }
  }
  if (isAuth) {
    return <Redirect to="/" />
  }
  return (
    <>
      <Login handleLogin={handleLogin} />
    </>
  )
}

export default LoginPage
