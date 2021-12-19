import React, { useEffect, useState } from "react"

export const AppContext = React.createContext()
const AppContextProvider = ({ store, children }) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCount(prev => prev + 1)
      console.log(count)
    }, [])
    return unsubscribe
  })
  return (
    <AppContext.Provider value={[store, count]}>{children}</AppContext.Provider>
  )
}

export default AppContextProvider
