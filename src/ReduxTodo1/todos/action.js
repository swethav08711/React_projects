import axios from "axios"
import {
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
} from "./actionTypes"

const addTodoRequest = () => {
  return {
    type: ADD_TODO_REQUEST,
  }
}

const addTodoSuccess = payload => {
  return {
    type: ADD_TODO_SUCCESS,
    payload,
  }
}

const addTodoFailure = error => {
  return {
    type: ADD_TODO_FAILURE,
    payload: error,
  }
}

const addTodo = payload => dispatch => {
  dispatch(addTodoRequest())
  return axios
    .post("http://localhost:2022/posts", {
      title: payload,
      status: false,
    })
    .then(res => {
      dispatch(addTodoSuccess(res.data))
      dispatch(getTodo())
    })
    .catch(err => {
      dispatch(addTodoFailure())
    })
}
export { addTodo }

////

const getTodoRequest = () => {
  return {
    type: GET_TODO_REQUEST,
  }
}

const getTodoSuccess = payload => {
  return {
    type: GET_TODO_SUCCESS,
    payload,
  }
}

const getTodoFailure = error => {
  return {
    type: GET_TODO_FAILURE,
    payload: error,
  }
}

const getTodo = payload => dispatch => {
  dispatch(getTodoRequest())
  return axios
    .get("http://localhost:2022/posts")
    .then(res => {
      dispatch(getTodoSuccess(res.data))
    })
    .catch(err => {
      dispatch(getTodoFailure())
    })
}
export { getTodo }
