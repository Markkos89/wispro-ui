import { inscripcionConstants } from "./constants";
import { userService } from "../../services";
import { alertActions } from "../Alert/actions";
import { history } from "../../helpers";
// import Swal from 'sweetalert2';

export const ingresar = (dni) => async (dispatch) => {
  dispatch(request(dni));
  try {
    const data = await userService.getInfoByDNI(dni);
    console.log({ data });
    if (data && data.data && data.data[0]) {
      console.log("entro");
      history.push("/nuevo-inscripto");
      dispatch(success(data.data[0]));
    } else {
      history.push("/nuevo-inscripto");
      dispatch(failure({ message: "No se encontraron resultados", dni }));
    }
  } catch (error) {
    dispatch(failure(error.toString()));
    dispatch(alertActions.error(error.toString()));
  }

  function request(user) {
    return { type: inscripcionConstants.INSCRIPCION_REQUEST, user };
  }
  function success(user) {
    return { type: inscripcionConstants.INSCRIPCION_SUCCESS, user };
  }
  function failure(error) {
    return { type: inscripcionConstants.INSCRIPCION_FAILURE, error };
  }
};
