import React from "react"
import MainCounter from "./component/MainCounter"
import AppContextProvider from "./Redux1/AppContextProvider"
//import MainReview from "./Reviews/MainReview"
//import BirthDay from "./BirthdayReminder/BirthDay"
//import MainTours from "./Tours/MainTours"
//import store from "./Redux/store"
import { store } from "./Redux1/store"
console.log(store.getState())
function App() {
  return (
    <>
      <AppContextProvider store={store}>
        <MainCounter />
      </AppContextProvider>
      {/* <BirthDay /> */}
      {/* <MainTours /> */}
      {/* <MainReview /> */}
    </>
  )
}

export default App
