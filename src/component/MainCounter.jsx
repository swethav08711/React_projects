import React from "react"
import { AppContext } from "../Redux1/AppContextProvider"
import Counter from "./Counter"

const MainCounter = () => {
  const { getState } = React.useContext(AppContext)
  const { counter } = getState()
  return (
    <div>
      <Counter />
      <div>{counter}</div>
    </div>
  )
}

export default MainCounter
