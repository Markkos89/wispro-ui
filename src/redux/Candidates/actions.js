import { candidatesConstants } from "./constants";
import { candidateService } from "../../services";

export const postCandidate = (data) => async (dispatch) => {
  dispatch(request(data));
  try {
    const serviceResponse = await candidateService.postCandidate(data);
    dispatch(success(serviceResponse));
  } catch (error) {
    dispatch(failure(error.toString()));
  }

  function request(payload) {
    return { type: candidatesConstants.POST_CANDIDATE_REQUEST, payload };
  }
  function success(payload) {
    return { type: candidatesConstants.POST_CANDIDATE_SUCCESS, payload };
  }
  function failure(payload) {
    return { type: candidatesConstants.POST_CANDIDATE_FAILURE, payload };
  }
};

export const getCandidates = (data) => async (dispatch) => {
  dispatch(request(data));
  try {
    const serviceResponse = await candidateService.getCandidates(data);
    dispatch(success(serviceResponse));
  } catch (error) {
    dispatch(failure(error.toString()));
  }

  function request(payload) {
    return { type: candidatesConstants.GET_ALL_CANDIDATES_REQUEST, payload };
  }
  function success(payload) {
    return { type: candidatesConstants.GET_ALL_CANDIDATES_SUCCESS, payload };
  }
  function failure(payload) {
    return { type: candidatesConstants.GET_ALL_CANDIDATES_FAILURE, payload };
  }
};

export const updateCandidate = (data) => async (dispatch) => {
  dispatch(request(data));
  try {
    const serviceResponse = await candidateService.updateCandidate(data);
    dispatch(success(serviceResponse));
  } catch (error) {
    dispatch(failure(error.toString()));
  }

  function request(payload) {
    return { type: candidatesConstants.UPDATE_CANDIDATE_REQUEST, payload };
  }
  function success(payload) {
    return { type: candidatesConstants.UPDATE_CANDIDATE_SUCCESS, payload };
  }
  function failure(payload) {
    return { type: candidatesConstants.UPDATE_CANDIDATE_FAILURE, payload };
  }
};