import { createStore } from "redux"
import { addTodo, toggleTodo } from "./action"
import reducer from "./reducer"

const initState = {
  todo: [],
}
var store = createStore(reducer, initState)
//console.log(store.getState())
store.dispatch(addTodo("React"))
store.dispatch(addTodo("Redux"))
store.dispatch(addTodo("Redux12"))
//console.log(store.getState())

store.dispatch(toggleTodo("React"))
console.log(store.getState())
