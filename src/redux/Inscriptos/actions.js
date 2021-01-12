import { inscriptoConstants } from "./constants";
import { inscriptoService } from "../../services";
import Swal from "sweetalert2";
import { history } from "../../helpers";

export const postFormNuevoInscripto = (data) => async (dispatch) => {
  dispatch(request(data));
  try {
    const response = await inscriptoService.postFormNuevoInscripto(data);
    console.log(response);
    if (response.message) {
      dispatch(success(response));
      dispatch(saveToPrint(data));
      Swal.fire("Exito!", response.message, "success");
      history.push("/print-inscripcion");
    } else {
      dispatch(failure(response));
      Swal.fire("Error!", response.message, "error");
    }
  } catch (error) {
    dispatch(failure(error.toString()));
  }

  function request(payload) {
    return { type: inscriptoConstants.POST_NUEVOINSCRIPTO_REQUEST, payload };
  }
  function success(payload) {
    return { type: inscriptoConstants.POST_NUEVOINSCRIPTO_SUCCESS, payload };
  }
  function saveToPrint(payload) {
    return { type: inscriptoConstants.SAVE_TO_PRINT, payload };
  }
  function failure(error) {
    return { type: inscriptoConstants.POST_NUEVOINSCRIPTO_FAILURE, error };
  }
};
