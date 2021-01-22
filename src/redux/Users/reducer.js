import { usersConstants } from './constants'

const initialState = {
  getAllData: [],
  getAllLoading: '',
  getAllError: ''
}

export function users(state = initialState, action) {
  switch (action.type) {
    case usersConstants.GET_ALL_USERS_REQUEST:
      return {
        ...state,
        getAllLoading: action.payload
      }
    case usersConstants.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        getAllData: action.payload
      }
    case usersConstants.GET_ALL_USERS_FAILURE:
      return {
        ...state,
        getAllError: action.payload
      }
    default:
      return state
  }
}
