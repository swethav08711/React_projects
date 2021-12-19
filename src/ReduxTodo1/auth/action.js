import { LOGIN_FAILURE, LOGIN_SUCESS } from "./actionType"

const loginSucess = token => {
  return {
    type: LOGIN_SUCESS,
    payload: token,
  }
}
const loginFailure = err => {
  return {
    type: LOGIN_FAILURE,
    payload: err,
  }
}
export { loginSucess, loginFailure }
