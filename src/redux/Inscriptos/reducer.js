import { inscriptoConstants } from '../Inscriptos/constants';

const initialState = { 
    loading: false, 
    error: "",
    data: [],
    dataToPrint: []
};

export function inscriptos(state = initialState, action) {
  switch (action.type) {
    case inscriptoConstants.POST_NUEVOINSCRIPTO_REQUEST:
      return {
        loading: true,
        data: []
      };
    case inscriptoConstants.POST_NUEVOINSCRIPTO_SUCCESS:
      return {
        loading: false,
        data: action.payload
      };
    case inscriptoConstants.POST_NUEVOINSCRIPTO_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    case inscriptoConstants.SAVE_TO_PRINT:
      return {
        dataToPrint: action.payload
      }
    default:
      return state
  }
}