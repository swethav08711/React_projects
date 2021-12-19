import { ADD_TODO } from "./actionTypes"

const initState = {
  todos: [
    {
      id: 1,
      title: "LEARN REDUX",
      status: false,
    },
  ],
}

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, payload],
      }
    }
    default:
      return state
  }
}
export { reducer }

//create action
//create reducer
//create store
//pass store in provider
//select data from store
//pass data it to required elements
//diapatch an action depending on user input
