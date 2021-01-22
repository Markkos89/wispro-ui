import { adminConstants } from '../Admin/constants'

let admin = JSON.parse(localStorage.getItem('admin'))
const initialState = admin
  ? { loggedIn: true, admin, loggingIn: false }
  : { loggedIn: false, loggingIn: false }

export function authentication(state = initialState, action) {
  switch (action.type) {
    case adminConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        admin: action.admin
      }
    case adminConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        admin: action.admin
      }
    case adminConstants.LOGIN_FAILURE:
      return {}
    case adminConstants.LOGOUT:
      return {}
    default:
      return state
  }
}
