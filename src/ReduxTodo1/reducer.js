import { actionConstants } from "./action"

const initState = {
  todos: [{ id: 1, status: true, title: "React Redux" }],
}
function reducer(state = initState, action) {
  console.log("default", state, action)
  switch (action.type) {
    case actionConstants.ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    }
    case actionConstants.REMOVE_TODO_ITEM: {
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action?.payload?.id),
      }
    }
    case actionConstants.TOGGLE_TODO_STATUS: {
      return {
        ...state,
        todos: state.todos.map(item =>
          item.id === action.payload.id
            ? { ...item, status: !item.status }
            : item
        ),
      }
    }
    default:
      return state
  }
}
export default reducer
