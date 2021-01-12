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
    case candidatesConstants.POST_CANDIDATE_REQUEST:
      return {
        ...state,
        postLoading: action.payload,
      };
    case candidatesConstants.GET_ALL_CANDIDATES_REQUEST:
      return {
        ...state,
        getAllLoading: action.payload,
      };
    case candidatesConstants.POST_CANDIDATE_SUCCESS:
      return {
        ...state,
        postData: action.payload,
      };
    case candidatesConstants.GET_ALL_CANDIDATES_SUCCESS:
      return {
        ...state,
        getAllData: action.payload,
      };
    case candidatesConstants.POST_CANDIDATE_FAILURE:
      return {
        ...state,
        postError: action.payload,
      };
    case candidatesConstants.GET_ALL_CANDIDATES_FAILURE:
      return {
        ...state,
        getAllError: action.payload,
      };
    case candidatesConstants.UPDATE_CANDIDATE_REQUEST:
      return {
        ...state,
        updateCandidateLoading: action.payload,
        updateCandidateData: [],
        updateCandidateError: "",
      };
    case candidatesConstants.UPDATE_CANDIDATE_SUCCESS:
      return {
        ...state,
        updateCandidateLoading: false,
        updateCandidateData: action.payload,
        updateCandidateError: "",
      };
    case candidatesConstants.UPDATE_CANDIDATE_FAILURE:
      return {
        ...state,
        updateCandidateLoading: false,
        updateCandidateData: [],
        updateCandidateError: action.payload,
      };
    default:
      return state;
  }
}
