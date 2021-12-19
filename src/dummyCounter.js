import React from "react"
import { useSelector } from "react-redux"
import Counter from "./count/Counter"
import { AppContext } from "./Redux2/AppContextProvider"
//import MainCounter from "./component/MainCounter"
//import AppContextProvider from "./Redux1/AppContextProvider"
//import MainReview from "./Reviews/MainReview"
//import BirthDay from "./BirthdayReminder/BirthDay"
//import MainTours from "./Tours/MainTours"
//import store from "./Redux/store"
// import { store } from "./Redux1/store"
// console.log(store.getState())

function App() {
  const count = useSelector(state => state.count)
  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <Counter />
      {/* <AppContextProvider store={store}>
        <MainCounter />
      </AppContextProvider> */}
      {/* <BirthDay /> */}
      {/* <MainTours /> */}
      {/* <MainReview /> */}
    </>
  )
}

export default App

//index.js

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./Redux2/store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
