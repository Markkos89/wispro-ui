import { adminConstants } from "./constants";
import { adminServices } from "../../services";
import { history } from "../../helpers";

export const login = (email, password) => async (dispatch) => {
  dispatch(request(email));
  try {
    const data = await adminServices.login(email, password);
    dispatch(success(data));
  } catch (error) {
    dispatch(failure(error.toString()));
  }

  function request(admin) {
    return { type: adminConstants.LOGIN_REQUEST, admin };
  }
  function success(admin) {
    return { type: adminConstants.LOGIN_SUCCESS, admin };
  }
  function failure(error) {
    return { type: adminConstants.LOGIN_FAILURE, error };
  }
};

export const logout = () => {
  adminServices.logout();
  history.push("/");
  return { type: adminConstants.LOGOUT };
};



export const userActions = {
  logout
}
