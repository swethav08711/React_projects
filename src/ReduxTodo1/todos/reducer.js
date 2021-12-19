import { loadData, saveData } from "../../utilsTodo1/localstorage"
import { actionConstants } from "./action"

const initState = {
  todos: loadData("todos") || [],
}
function reducer(state = initState, action) {
  console.log("default", state, action)
  switch (action.type) {
    case actionConstants.ADD_TODO: {
      const updateTodo = [...state.todos, action.payload]
      saveData("todos", updateTodo)
      return {
        ...state,
        todos: updateTodo,
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
