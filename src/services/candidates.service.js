import clienteAxios from "../api/axios";

export const candidateService = {
  postCandidate,
  getCandidates,
  updateCandidate,
};

async function postCandidate(data) {
  try {
    const response = await clienteAxios.post(`/v1/candidates`, data);
    if (response.status === 201) {
      return response.data;
    } else {
      console.log("otro status");
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getCandidates() {
  try {
    const response = await clienteAxios.get(`/v1/candidates`);
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("otro status");
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function updateCandidate(data) {
  try {
    const response = await clienteAxios.patch(
      `/v1/candidates/${data.candidateId}`,
      data
    );
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("otro status");
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}
