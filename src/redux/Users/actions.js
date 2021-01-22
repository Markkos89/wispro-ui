import { usersConstants } from './constants'
import { usersService } from '../../services'

export const getUsers = data => async dispatch => {
  dispatch(request(data))
  try {
    const serviceResponse = await usersService.getUsers(data)
    dispatch(success(serviceResponse))
  } catch (error) {
    dispatch(failure(error.toString()))
  }

  function request(payload) {
    return { type: usersConstants.GET_ALL_USERS_REQUEST, payload }
  }
  function success(payload) {
    return { type: usersConstants.GET_ALL_USERS_SUCCESS, payload }
  }
  function failure(payload) {
    return { type: usersConstants.GET_ALL_USERS_FAILURE, payload }
  }
}
