import clienteAxios from "../api/axios";

export const actasPoliciaService = {
  getByNroActa,
  getByDni,
  getByCuitCuil,
  getByNombreCompleto,
  getByEstado,
  getById,
};

async function getByNroActa(nroacta) {
  try {
    const response = await clienteAxios.get(
      `/api/actaspolicia/getbynroacta/${nroacta}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getByDni(dni) {
  try {
    const response = await clienteAxios.get(
      `/api/actaspolicia/getbydni/${dni}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getByCuitCuil(cuitcuil) {
  try {
    const response = await clienteAxios.get(
      `/api/actaspolicia/getbycuitcuil/${cuitcuil}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getByNombreCompleto(nombrecompleto) {
  try {
    const response = await clienteAxios.get(
      `/api/actaspolicia/getbynombrecompleto/${nombrecompleto}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getByEstado(estado) {
  try {
    const response = await clienteAxios.get(
      `/api/actaspolicia/getbyestado/${estado}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getById(id) {
  try {
    const response = await clienteAxios.get(`/api/actaspolicia/getbyid/${id}`);

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
