import React from "react"
import { addCounter, reducerCounter } from "../Redux1/action"
import { AppContext } from "../Redux1/AppContextProvider"

const Counter = () => {
  const { dispatch, getState } = React.useContext(AppContext)
  const { counter } = getState()

  const handleAdd = () => {
    dispatch(addCounter(1))
  }
  const handleReduce = () => {
    dispatch(reducerCounter(1))
  }
  return (
    <>
      <h1>Counter:{counter}</h1>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleReduce}>REDUCE</button>
    </>
  )
}

export default Counter
