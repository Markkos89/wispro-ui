import MockUsers from '../data/users'

export const usersService = {
  getUsers
}

async function getUsers() {
  return MockUsers
}
