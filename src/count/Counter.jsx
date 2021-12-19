import React from "react"
import { useDispatch } from "react-redux"
import { decrementCounter, incrementCounter } from "../Redux2/action"
import { AppContext } from "../Redux2/AppContextProvider"

const Counter = () => {
  //   const { dispatch } = React.useContext(AppContext)[1]
  const dispatch = useDispatch()
  const handleIncrement = () => {
    const action = incrementCounter(1)
    dispatch(action)
  }
  const handleDecrement = () => {
    const action = decrementCounter(1)
    dispatch(action)
  }
  return (
    <div>
      <button onClick={handleIncrement}> Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter
