import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import { authReducer } from "./auth/reducer"
import reducer from "./todos/reducer"
import thunk from "redux-thunk"
const rootReducer = combineReducers({
  auth: authReducer,
  app: reducer,
})
// const customMiddleware = store => next => action => {
//   return typeof action === "function"
//     ? action(store.dispatch, store.getState)
//     : next(action)
// }
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
)

export const store = createStore(rootReducer, enhancer)
