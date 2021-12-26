export const actionConstants = {
  // GET_TODO_REQUEST: "GET_TODO_REQUEST",
  // GET_TODO_SUCESS: "GET_TODO_SUCESS",
  // GET_TODO_FAILURE: "GET_TODO_FAILURE",
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
  TOGGLE_TODO_STATUS: "TOGGLE_TODO_STATUS",
}
// export const getTodosRequest = () => {
//   return {
//     type: actionConstants.GET_TODO_REQUEST,
//     payload: {
//       isLoading: true,
//     },
//   }
// }
// export const getTodosSucess = todos => {
//   return {
//     type: actionConstants.GET_TODO_SUCESS,
//     payload: {
//       todos: todos,
//     },
//   }
// }
// export const getTodosFailure = () => {
//   return {
//     type: actionConstants.GET_TODO_FAILURE,
//     payload: {
//       isError: true,
//     },
//   }
//}
export const adTodo = ({ title, status, id }) => ({
  type: actionConstants.ADD_TODO,
  payload: {
    title,
    status,
    id,
  },
})
export const removeTodo = id => ({
  type: actionConstants.REMOVE_TODO_ITEM,
  payload: {
    id: id,
  },
})

export const toggleTodo = id => ({
  type: actionConstants.TOGGLE_TODO_STATUS,
  payload: {
    id: id,
  },
})
