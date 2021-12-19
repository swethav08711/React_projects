import React from "react"
export const AppContext = React.createContext()
export default function AppContextProvider({ children, store }) {
  const { dispatch, getState } = store
  const value = { dispatch, getState }
  const [state, setState] = React.useState(0)
  const forceUpdate = () => setState(prev => prev + 1)
  store.subscribe(forceUpdate)
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
