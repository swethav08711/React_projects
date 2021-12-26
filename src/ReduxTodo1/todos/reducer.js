import { loadData, saveData } from "../../utilsTodo1/localstorage"
import { actionConstants } from "./action"

const initState = {
  todos: loadData("todos") || [],
  isLoading: true,
  isError: false,
}
function reducer(state = initState, action) {
  console.log("default", state, action)
  switch (action.type) {
    case actionConstants.GET_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case actionConstants.GET_TODO_SUCESS: {
      return {
        ...state,
        todos: action.payload.todos,
        isLoading: false,
      }
    }
    case actionConstants.GET_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    }
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
