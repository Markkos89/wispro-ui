import { userConstants } from "./constants";
import { userService } from "../../services";
import { history } from "../../helpers";
// import Swal from 'sweetalert2';

export const login = (email, password) => async (dispatch) => {
  dispatch(request(email));
  try {
    const data = await userService.login(email, password);
    dispatch(success(data));
    // history.push('/dashboard');
  } catch (error) {
    dispatch(failure(error.toString()));
  }

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
};

export const logout = () => {
  userService.logout();
  history.push("/");
  return { type: userConstants.LOGOUT };
};

function register(user) {
  return (dispatch) => {
    dispatch(request(user));

    userService.register(user).then(
      (user) => {
        dispatch(success());
        history.push("/login");
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}

export const userActions = {
  logout,
  register,
};
