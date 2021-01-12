import { inscripcionConstants } from './constants';

const initialState = {
    user: [],
    error: "",
    loading: false,
}

export function inscripcion(state = initialState, action) {
  switch (action.type) {
    case inscripcionConstants.INSCRIPCION_REQUEST:
      return {
        loading: true
      };
    case inscripcionConstants.INSCRIPCION_SUCCESS:
      return {
        user: action.users
      };
    case inscripcionConstants.INSCRIPCION_FAILURE:
      return {
        error: action.error
      };
    // case inscripcionConstants.RESET_USER_INFO:
    //   return{
    //     ...state,
    //     info_user: []
    //   }
    default:
      return state
  }
}