import { ADD_COUNTER, REDUCE_COUNTER } from "./actionTypes"

export const addCounter = payload => {
  return {
    type: ADD_COUNTER,
    payload,
  }
}
export const reducerCounter = payload => {
  return {
    type: REDUCE_COUNTER,
    payload,
  }
}
