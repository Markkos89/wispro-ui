import { candidatesConstants } from "./constants";

const initialState = {
  postData: [],
  postLoading: "",
  postError: "",
  getAllData: [],
  getAllLoading: "",
  getAllError: "",
  updateCandidateLoading: false,
  updateCandidateData: [],
  updateCandidateError: "",
};

export function candidates(state = initialState, action) {
  switch (action.type) {
    case candidatesConstants.GET_ALL_CANDIDATES_REQUEST:
      return {
        ...state,
        getAllLoading: action.payload,
      };
    case candidatesConstants.GET_ALL_CANDIDATES_SUCCESS:
      return {
        ...state,
        getAllData: action.payload,
      };
    case candidatesConstants.GET_ALL_CANDIDATES_FAILURE:
      return {
        ...state,
        getAllError: action.payload,
      };
    default:
      return state;
  }
}
