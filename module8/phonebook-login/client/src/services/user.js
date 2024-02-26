import axios from 'axios'
const baseURL = '/api/users'

const createUser = (newUser) => {
  const request = axios.post(baseURL, newUser)
  return request.then(response => response.data)
}

export default { createUser }