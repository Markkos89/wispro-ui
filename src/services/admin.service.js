import clienteAxios from '../api/axios'

export const adminServices = {
  login,
  logout
}

async function login(email, password) {
  try {
    const data = {
      email,
      password
    }
    const response = await clienteAxios.post(`/v1/auth/login`, data)
    if (response.status === 200) {
      localStorage.setItem('admin', JSON.stringify(response.data))
      return response.data
    }
  } catch (error) {
    console.log(error)
    return error
  }
}

function logout() {
  localStorage.removeItem('admin')
}
