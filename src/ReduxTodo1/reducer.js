import { actionConstants } from "./action"

function reducer(state, action) {
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
