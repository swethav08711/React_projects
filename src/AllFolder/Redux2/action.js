export const INCREMENT_COUNTER = "INCREMENT_COUNTER"
export const DECREMENT_COUNTER = "DECREMENT_COUNTER"
export const incrementCounter = amount => ({
  type: INCREMENT_COUNTER,
  payload: amount,
})
export const decrementCounter = amount => ({
  type: DECREMENT_COUNTER,
  payload: amount,
})
