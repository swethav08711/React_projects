import { actionConstants } from "./action"

const initState = {
  todos: [{ id: 1, status: true, title: "React Redux" }],
}
function reducer(state = initState, action) {
  console.log("default", state, action)
  switch (action.type) {
    case actionConstants.ADD_TODO: {
      return state
    }
    case actionConstants.REMOVE_TODO_ITEM: {
      return state
    }
    case actionConstants.TOGGLE_TODO_STATUS: {
      return state
    }
    default:
      return state
  }
}
export default reducer
