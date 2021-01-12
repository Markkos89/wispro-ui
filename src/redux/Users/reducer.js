import { userConstants } from './constants';

const initialState = {
  info_user: [],
  loading: "",
  items: [],
  error: ""
}

export function users(state = initialState, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        ...state,
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id
            ? { ...user, deleting: true }
            : user
        )
      };
    case userConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case userConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...userCopy } = user;
            // return copy of user with 'deleteError:[error]' property
            return { ...userCopy, deleteError: action.error };
          }

          return user;
        })
      };
    case userConstants.GET_INFO_REQUEST:
      return {
        ...state,
        info_loading: true
      }
    case userConstants.GET_INFO_SUCCESS:
      return {
        ...state,
        info_loading: false,
        info_user: action.payload
      }
      case userConstants.GET_INFO_SUCCESS2:
      return {
        ...state,
        info_loading: false,
        info_user: {
          ...initialState.info_user, 
          dni: action.payload
        }
      }
    case userConstants.GET_INFO_FAILURE:
      return {
        ...state,
        info_loading: false,
        info_user: [],
        error: action.payload
      }
      case userConstants.GET_ALL_REQUEST:
      return {
        ...state,
        all_info_loading: true
      }
    case userConstants.GET_ALL_SUCCESS:
      return {
        ...state,
        all_info_loading: false,
        all_info: action.payload
      }
    case userConstants.GET_ALL_FAILURE:
      return {
        ...state,
        all_info_loading: false,
        all_info: [],
        all_info_error: action.payload
      }
    case userConstants.RESET_USER_INFO:
      return{
        ...state,
        info_user: []
      }
    default:
      return state
  }
}